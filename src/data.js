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
    // {
    //     title: 'Marasi',
    //     id: 2,
    //     projectId: 2,
    //     projectTitle: 'Tatweer'
    // },
    // {
    //     title: 'Fooka Bay',
    //     id: 1,
    //     projectId: 3,
    //     projectTitle: 'Orascom'
    // },
]
export const projects = [
    {
        projectId: 1,
        projectTitle: 'TMG'

    },
    {
        projectId: 2,
        projectTitle: 'Tatweer'

    },
    // {
    //     projectId: 3,
    //     projectTitle: 'Orascom'

    // },
]

export const template = {
    generalConfig: {
        title: 'General Config',
        id: 'generalConfig',
        children: {
            event: {
                id: 'event',
                title: "Event",
            },
            cityGuide: {
                id: 'cityGuide',
                title: 'City Guide',
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
            navbar: {
                id: 'navbar',
                title: "Navbar",
                selectable: true,
                children: {
                    home: {
                        id: 'home',
                        title: "Home"
                    },
                    services: {
                        id: 'services',
                        title: "Services"
                    },
                    accessControl: {
                        id: 'accessControl',
                        title: "Access Control"
                    },
                    payment: {
                        id: 'payment',
                        title: "Payment"
                    },
                    setting: {
                        id: 'setting',
                        title: "Settings"
                    },
                    more: {
                        id: 'more',
                        title: "More"
                    },
                    menu: {
                        id: 'menu',
                        title: "Menu"
                    },
                    cityGuide: {
                        id: 'cityGuide',
                        title: "City Guide",
                    },
                }
            },
            menu: {
                id: 'menu',
                title: "Menu",
                selectable: true,
                children: {
                    news: {
                        id: 'news',
                        title: "News"
                    },
                    events: {
                        id: 'events',
                        title: "Events"
                    },
                    promotions: {
                        id: 'promotions',
                        title: "Promotions"
                    },
                    transportaion: {
                        id: 'transportaion',
                        title: "Transportation"
                    },
                    pollsSurveys: {
                        id: 'pollsSurveys',
                        title: "Polls/Surveys"
                    },
                    helpCenter: {
                        id: 'helpCenter',
                        title: "Help Center"
                    },
                    setting: {
                        id: 'setting',
                        title: "Setting"
                    },
                    gateAccessCards: {
                        id: 'gateAccessCards',
                        title: "Gate Access Cards"
                    },
                    digitalWallet: {
                        id: 'digitalWallet',
                        title: "Digital Wallet"
                    },
                    realEstate: {
                        id: 'realEstate',
                        title: "Real Estate"
                    },
                    cityGuide: {
                        id: 'cityGuide',
                        title: "City Guide"
                    },
                    contactUs: {
                        id: 'contactUs',
                        title: "Contac tUs"
                    },
                    directory: {
                        id: 'directory',
                        title: "Directory"
                    },
                    aboutUs: {
                        id: 'aboutUs',
                        title: "About Us"
                    },
                }
            },
            home: {
                id: 'home',
                title: "Home",
                // selectable: true,
                children: {
                    ourProject: {
                        id: 'ourProject',
                        title: "Our Projects"
                    },
                    quickLinks: {
                        id: 'quickLinks',
                        title: "Quick Links"
                    },
                    thingsToDo: {
                        id: 'thingsToDo',
                        title: "Things To Do"
                    },
                    requestServices: {
                        id: 'requestServices',
                        title: "Request Services"
                    },
                    duePayment: {
                        id: 'duePayment',
                        title: "Due Payments"
                    },
                    events: {
                        id: 'events',
                        title: "Events"
                    },
                    cityGuideCategory: {
                        id: 'cityGuideCategory',
                        title: "City Guide Category"
                    },
                    news: {
                        id: 'news',
                        title: "News"
                    },
                    posts: {
                        id: 'posts',
                        title: 'Posts'
                    }
                }
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
                title: "Payment",
                selectable: true,
                children: {
                    addPayment: {
                        title: 'Add Payment',
                        id: 'addPayment'
                    }
                }
            },
            personalizedNotification: {
                id: 'personalizedNotification',
                title: "Personalized Notification"
            },
            gaDashboard: {
                id: 'gaDashboard',
                title: 'Google Analytics Dashboard'
            }
        }
    }
}
export const initNodes = () => {
    let nodes = []
    // cities.forEach(city => {
    //     let cityNode = {
    //         value: `${city.projectId}:${city.id}`,
    //         label: `${city.projectTitle} - ${city.title}`,
    //         children: []
    //     }
    //     Object.values(template).forEach(node => cityNode.children.push(generateNodes(node, `${city.projectId}-${city.id}`)))
    //     nodes.push(cityNode)
    // })
    projects.forEach(city => {
        let cityNode = {
            value: `${city.projectId}`,
            label: `${city.projectTitle}`,
            showCheckbox: false,
            children: []
        }

        Object.values(template).forEach(node => cityNode.children.push(generateNodes(node, `${city.projectId}`)))
        nodes.push(cityNode)
    })
    return nodes
}
const generateNodes = (parent, id) => {
    let node = {}
    node.label = parent.title;
    node.value = `${id}:${parent.id}`;
    node.showCheckbox = parent.selectable ? true : false
    node.canBeSelected = parent.selectable

    if (parent.children) {
        node.children = []
        Object.values(parent.children).forEach(parent => node.children.push(generateNodes(parent, node.value)))

    } else {
        node.showCheckbox = true
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