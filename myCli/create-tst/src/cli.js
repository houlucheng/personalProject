import createSpaApp from './main'

function cli(args) {
    let options = parseArgsIntoOptions(args)
    options = await promptForOptions(options)
    createSpaApp(options)
}

// 解析输入参数
const parseArgsIntoOptions = (rawArgs) => {
    const args = arg({
        '--git': Boolean, // 解析成布尔值
        '--yes': Boolean,
        '--install': Boolean,
        '-g': '--git', // 参数映射，-g 等同于 --git
        '-y': '--yes',
        '-i': '--install',
    }, {
        argv: rawArgs.slice(2)
    })
    return {
        skipPrompts: args['--yes'] || false,
        initGit: args['--git'] || false,
        template: args._[0],
        runInstall: args['--install'] || false
    }
}

const promptForOptions = async (options) => {
    const defaultTemplate = 'JavaScript';
    if (options.skipPrompts) {
        return {
            ...options,
            template: options.template || defaultTemplate
        }
    }

    const questions = [];
    if (!options.template) {
        // 1. 选择项目模板
        questions.push({
            type: 'list',
            name: 'template',
            message: '请选择当前新建项目的模板',
            choices: ['JavaScript', 'TypeScript'],
            default: defaultTemplate
        })
    }

    if (!options.initGit) {
        // 2. 选择是否初始化git
        questions.push({
            type: 'confirm',
            name: 'git',
            message: '是否初始化git仓库',
            default: false
        })
    }

    if (!options.runInstall) {
        // 3. 选择是否安装npm依赖
        questions.push({
            type: 'confirm',
            name: 'install',
            message: '是否安装依赖',
            default: false
        })
    }

    const answers = await inquirer.prompt(questions)

    return {
        ...options,
        template: options.template || answers.template,
        git: options.initGit || answers.git,
        install: options.runInstall || answers.install
    }
}
