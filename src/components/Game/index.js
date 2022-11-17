import { Tabs } from 'antd'
import React from 'react'
import TabItem from '../TabItem'
import { useTranslate } from 'react-redux-multilingual'



export default function Game() {

  const translate = useTranslate()

    return (
        <div className='game-tab'>
            
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab={translate('games.luckyNumber')} key="1">
                    <TabItem />
                </Tabs.TabPane>
                <Tabs.TabPane tab={translate('games.luckyBP')} key="2">
                  <TabItem />

                </Tabs.TabPane>
                <Tabs.TabPane tab={translate('games.hashBull')} key="3">
                     <TabItem />

                </Tabs.TabPane>
            </Tabs>

 
        </div>
    )
}
