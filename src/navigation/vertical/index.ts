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
                    icon: 'tabler:home-heart',
                    title: 'Items',
                    path: 'game/main'
                },
                {
                    icon: 'tabler:book',
                    title: 'Characters',
                    path: 'game/characters'
                },
                {
                    icon: 'tabler:language-hiragana',
                    title: 'Items',
                    path: 'game/items'
                }
            ]
        },
        {
            icon: 'tabler:horse-toy',
            title: "Kid's Zone",
            path: 'kids'
        },
        {
            sectionTitle: 'My Pages'
        },
        {
            icon: 'tabler:pacman',
            title: 'About Me',
            path: 'aboutme'
        },
        {
            icon: 'tabler:pacman',
            title: 'Setting',
            path: 'setting'
        }
    ];
};

export default navigation;
