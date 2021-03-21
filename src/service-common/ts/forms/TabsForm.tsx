import React from 'react';

import '../../scss/root.scss';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { RocksmithForm, MusicPlayerForm, SchemeForm, DebugForm } from '@Yandex.DJ/service-common';

export interface TabsFormProps {
}

const TabsForm = (props: TabsFormProps) => {
    return (
        <Tabs forceRenderTabPanel>
            <TabList>
                <Tab>Rocksmith</Tab>
                <Tab>Плеер</Tab>
                <Tab>Схемы виджетов</Tab>
                <Tab>Отладка</Tab>
            </TabList>

            <TabPanel>
                <RocksmithForm />
            </TabPanel>
            <TabPanel>
                <MusicPlayerForm />
            </TabPanel>
            <TabPanel>
                <SchemeForm />
            </TabPanel>
            <TabPanel>
                <DebugForm />
            </TabPanel>            
        </Tabs>
    );
};

export default TabsForm;
