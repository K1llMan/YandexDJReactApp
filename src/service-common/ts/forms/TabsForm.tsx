import React from 'react';

import '../../scss/root.scss';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { MusicPlayerForm, SchemeForm } from '@Yandex.DJ/service-common';

export interface TabsFormProps {
}

const TabsForm = (props: TabsFormProps) => {
    return (
        <Tabs forceRenderTabPanel>
            <TabList>
                <Tab>Плеер</Tab>
                <Tab>Схемы виджетов</Tab>
            </TabList>

            <TabPanel>
                <MusicPlayerForm />
            </TabPanel>
            <TabPanel>
                <SchemeForm />
            </TabPanel>
        </Tabs>
    );
};

export default TabsForm;
