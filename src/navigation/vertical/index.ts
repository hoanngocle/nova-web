// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types';

const navigation = (): VerticalNavItemsType => {
    return [
        {
            icon: 'tabler:smart-home',
            title: 'Dashboard',
            path: 'dashboard'
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
            title: 'Entertaiment',
            children: [
                {
                    icon: 'tabler:math-function',
                    title: 'Home',
                    path: 'game'
                },
                {
                    icon: 'tabler:book',
                    title: 'Characters',
                    path: 'game/characters'
                },
                {
                    icon: 'tabler:language-hiragana',
                    title: 'Items',
                    path: 'game/japanese'
                }
            ]
        },
        {
            icon: 'tabler:beach',
            title: 'Relax Zone',
            path: 'relax'
        },
        {
            icon: 'tabler:horse-toy',
            title: "Kid's Zone",
            path: 'kids'
        },
        {
            sectionTitle: 'Apps & My Pages'
        },
        {
            icon: 'tabler:file-code',
            title: 'My CV',
            path: 'mycv'
        },
        {
            icon: 'tabler:pacman',
            title: 'About Me',
            path: 'aboutme'
        }
    ];
};

export default navigation;
