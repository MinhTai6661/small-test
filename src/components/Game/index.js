import { Tabs } from 'antd'
import React from 'react'
import TabItem from '../TabItem'

export default function Game() {
    return (
        <div>
            
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Tab 1" key="1">
                    <TabItem />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">
                  sdfdf
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                   sfdfsdf
                </Tabs.TabPane>
            </Tabs>

 
        </div>
    )
}
