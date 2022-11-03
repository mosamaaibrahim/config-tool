export const nodes = [{
    value: 'tmg',
    label: 'Tmg',
    children: [
        {
            value: 'generalConfig', label: 'General Config',
            children: [
                {
                    value: 'event', label: 'Event',
                },
                {
                    value: 'cityGuide', label: 'City Guide',
                },
                { value: 'promotions', label: 'Promotions' },
                { value: 'news', label: 'News' },
                { value: 'alerts', label: 'Alerts' },
            ],
        },
        {
            value: 'mobile', label: 'Mobile', children: [
                { value: 'homePage', label: 'Home Page' },
                { value: 'paymentmobile', label: 'Payment' },
                { value: 'accessControl', label: 'Acces Control' },


            ],
        },
        {
            value: 'web', label: 'Web', children: [
                { value: 'roleManagement', label: 'Role Management' },
                { value: 'mediaCenter', label: 'Media Center' },
                { value: 'payment', label: 'Payment' },
                { value: 'personalizedNotification', label: 'Personalized Notification' },


            ],
        },

    ],
}];


export const cities = [
    {
        title: 'Madinaty',
        id: 1,
        projectId: 1,
        projectTitle: 'TMG'
    },
    {
        title: 'Rehab',
        id: 2,
        projectId: 1,
        projectTitle: 'TMG'
    },
    {
        title: 'Tatweer City',
        id: 1,
        projectId: 2,
        projectTitle: 'Tatweer'
    },
    {
        title: 'Marasi',
        id: 2,
        projectId: 2,
        projectTitle: 'Tatweer'
    },
    {
        title: 'Fooka Bay',
        id: 1,
        projectId: 3,
        projectTitle: 'Orascom'
    },
]


export const template = {
    generalConfig: {
        title: 'General Config',
        id: 'generalConfig',
        children: {
            event: {
                id: 'event',
                title: "Event"
            },
            cityGuide: {
                id: 'cityGuide',
                title: '"City Guide"'
            },
            promotions: {
                id: 'promotions',
                title: "Promotions"
            },
            news: {
                id: 'news',
                title: "News"
            },
            alerts: {
                id: 'alerts',
                title: "Alerts"
            }
        }
    },
    mobile: {
        title: "Mobile",
        id: "mobile",
        children: {
            payment: {
                id: 'payment',
                title: "Payment"
            },
            accessControl: {
                id: 'accessControl',
                title: "Access Control"
            }
        }
    },
    web: {
        title: "Web",
        id: "web",
        children: {
            roleMgmt: {
                id: 'roleMgmt',
                title: "Role Management"
            },
            mediaCenter: {
                id: "mediaCenter",
                title: "Media Center"
            },
            payment: {
                id: 'payment',
                title: "Payment"
            },
            personalizedNotification: {
                id: 'personalizedNotification',
                title: "Personalized Notification"
            }
        }
    }
}
export const initNodes = () => {
    let nodes = []
    cities.forEach(city => {
        let cityNode = {
            value: `${city.projectId}:${city.id}`,
            label: `${city.projectTitle} - ${city.title}`,
            children: []
        }
        Object.values(template).forEach(node => cityNode.children.push(generateNodes(node, `${city.projectId}-${city.id}`)))
        nodes.push(cityNode)
    })
    return nodes
}
const generateNodes = (parent, id) => {
    let node = {}
    node.label = parent.title;
    node.value = `${id}:${parent.id}`;

    if (parent.children) {
        node.children = []
        Object.values(parent.children).forEach(parent => node.children.push(generateNodes(parent, node.value)))

    }
    return { ...node }

}



let dummy = {
    '1-1': {
        generalConfig: {
            event: true,
            promotions: true
        },
        mobile: {
            payment: true
        }
    },
    '3-1': {
        generalConfig: {
            event: true,
        },
        mobile: {
            payment: true
        }
    },
}