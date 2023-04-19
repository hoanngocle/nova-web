// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types';

const navigation = (): VerticalNavItemsType => {
    return [
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
                    icon: 'tabler:book',
                    title: 'English',
                    path: 'study/english'
                },
                {
                    icon: 'tabler:language-hiragana',
                    title: 'Japanese',
                    path: 'study/japanese'
                },
                {
                    icon: 'tabler:math-function',
                    title: 'Math',
                    path: 'study/math'
                }
            ]
        },
        {
            icon: 'tabler:device-gamepad-2',
            title: 'Gaming',
            path: 'admin/game'
        },
        {
            icon: 'tabler:barbell',
            title: 'Training',
            path: 'admin/training'
        },
        {
            icon: 'tabler:beach',
            title: 'Relax',
            path: 'admin/relax'
        },
        {
            icon: 'tabler:horse-toy',
            title: "Kid's Zone",
            path: 'admin/kids'
        },
        {
            sectionTitle: 'Apps & My Pages'
        },
        {
            icon: 'tabler:file-code',
            title: 'My CV',
            path: 'admin/mycv'
        },
        {
            icon: 'tabler:pacman',
            title: 'About Me',
            path: 'admin/aboutme'
        }
    ];
};

export default navigation;
