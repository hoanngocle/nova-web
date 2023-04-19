// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types';

const navigation = (): HorizontalNavItemsType => [
    {
        icon: 'tabler:smart-home',
        title: 'Dashboard',
        path: 'admin'
    },
    {
        icon: 'tabler:book',
        title: 'Study',
        children: [
            {
                title: 'Dashboard',
                path: 'study/english'
            },
            {
                title: 'Dashboard',
                path: 'study/japanese'
            },
            {
                title: 'Dashboard',
                path: 'study/math'
            }
        ]
    },
    {
        icon: 'tabler:book',
        title: 'Gaming',
        path: 'admin/game'
    },
    {
        icon: 'tabler:book',
        title: 'Training',
        path: 'admin/training'
    },
    {
        icon: 'tabler:book',
        title: 'Relax',
        path: 'admin/relax'
    },
    {
        icon: 'tabler:book',
        title: "Kid's Zone",
        path: 'admin/kids'
    },
    {
        icon: 'tabler:book',
        title: 'My CV',
        path: 'admin/mycv'
    },
    {
        icon: 'tabler:book',
        title: 'About Me',
        path: 'admin/aboutme'
    }
];

export default navigation;
