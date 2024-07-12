interface Features {
    imgPath: string
    h2: string
    h3: string
    imgAlt: string
    id: string
}

export const featuresImg:Features = [
    {
        imgPath: '/assets/feature/f1.jpeg',
        h2: 'Real-Time Updates',
        h3: 'Keep your team informed with real-time updates and notifications..',
        imgAlt:'Image of feature 1',
        id: 'feature1'
    },
    {
        imgPath: '/assets/feature/f2.png',
        h2: 'Advanced Task Management',
        h3: 'Stay on top of tasks with advanced management features.',
        imgAlt:'Image of feature 2',
        id:'feature2'
    },
    {
        imgPath: '/assets/feature/f3.png',
        h2: 'Intuitive Interface',
        h3: 'Drag-and-drop functionality, customizable boards and easy to nativage layouts',
        imgAlt:'feature3',
        id:'feature3'
    },
    {
        imgPath: '/assets/feature/f4.png',
        h2: 'Customizable Workflows',
        h3: 'Custom fields, labels, and board templates that can be adjusted to suit diferent project needs',
        imgAlt:'feature4',
        id:'feature4'
    },
    {
        imgPath: '/assets/feature/f5.png',
        h2: 'Seamless Collaboration',
        h3: 'Shared boards, comments, and @mentions to keep everyone in the loop.',
        imgAlt:'feature5',
        id:'feature5'
    },
]
