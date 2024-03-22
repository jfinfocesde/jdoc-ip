interface subItemsInfoType {
    href: string,
    label: string,
    date: string,
}

interface itemsInfoType {
    href: string,
    label: string,
    date: string,
    submenu: subItemsInfoType[]
}

export const modedev = false

export const infoCourse = {
    title: "Introducción a la programación",
    description: "En este curso, aprenderás los fundamentos del desarrollo web con HTML y CSS. Te enseñaremos cómo crear páginas web que sean atractivas, funcionales y fáciles de usar.",
    image: "https://pro.guslyon.fr/static/html-css-67ea05e3879abd11f82b077273760d2f.png"
}

export const itemsInfo: itemsInfoType[] = [
    {
        href: "/course",
        label: "Introducción",
        date: '2024-2-15',
        submenu: []
    },
    {
        href: "/course/contents/semana1",
        label: "Semana 1",
        date: '2024-2-15',
        submenu: [
            {
                href: "/course/contents/semana1",
                label: "Pacto pedagógico",
                date: '2024-2-15',
            }            
        ]
    },
    {
        href: "",
        label: "Semana 2",
        date: '2024-2-22',
        submenu: [
            {
                href: "/course/contents/semana2",
                label: "Contenido",
                date: '2024-2-22',
            },
            {
                href: "/course/activities/actividad1",
                label: "Actividad 1",
                date: '2024-2-22',
            },
        ]
    },
    {
        href: "",
        label: "Semana 3",
        date: '2024-2-29',
        submenu: [
            {
                href: "/course/contents/semana3",
                label: "Contenido",
                date: '2024-2-29',
            },
            {
                href: "/course/activities/actividad2",
                label: "Actividad 2",
                date: '2024-2-29',
            },
        ]
    },
    {
        href: "",
        label: "Semana 4",
        date: '2024-3-7',
        submenu: [
            {
                href: "/course/contents/semana4",
                label: "Contenido",
                date: '2024-3-7',
            },
            {
                href: "/course/activities/actividad3",
                label: "Actividad 3",
                date: '2024-3-7',
            },
        ]
    },    
    {
        href: "",
        label: "Semana 5",
        date: '2024-3-14',
        submenu: [
            {
                href: "/course/contents/semana5",
                label: "Contenido",
                date: '2024-3-14',
            },
            {
                href: "/course/activities/actividad4",
                label: "Actividad 4",
                date: '2024-3-14',
            },
        ]
    },    
    {
        href: "",
        label: "Semana 6",
        date: '2024-3-22',
        submenu: [
            {
                href: "/course/contents/semana6",
                label: "Contenido",
                date: '2024-3-22',
            },
            // {
            //     href: "/course/activities/actividad4",
            //     label: "Actividad 4",
            //     date: '2024-3-14',
            // },
        ]
    },    
]
