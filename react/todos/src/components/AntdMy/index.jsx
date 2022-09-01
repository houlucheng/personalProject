import { ProFormSelect } from '@ant-design/pro-components';
import React from 'react';


export default function AntdMy() {
    return (
        <ProFormSelect
            name="sex"
            label="性别"
            showSearch
            allowClear={false}
            fieldProps={{
                labelInValue: true,
            }}
            valueEnum={{
                man: '男',
                woman: '女',
            }}
        />
    )
}