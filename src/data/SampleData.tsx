import type { User, Withdrawal } from "./SampleType";
import SlipUrl from "../assets/slip.png"

export const SampleData: Withdrawal[]  = [
    {
        id: "wd_001",
        userName: "Somchai",
        accountNumber: "123-456-7890",
        bank: "BBL",
        amount: 2500,
        status: "pending",
        createdAt: "2025-11-26T09:10:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-26T09:10:00Z" 
            }
        ],
        attachments: [],
        note: "เบิกค่าอะไหล่"
    },
    {
        id: "wd_002",
        userName: "Wirat",
        accountNumber: "987-654-3210",
        bank: "KBANK",
        amount: 1200,
        status: "processing",
        createdAt: "2025-11-25T13:30:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-25T13:30:00Z" 
            },
            { 
                status: "processing", 
                at: "2025-11-25T14:00:00Z" 
            }
        ],
        attachments: [
            {
                id: "a1",
                type: "image",
                name: "slip.jpg",
                url: SlipUrl
            }
        ],
        note: ""
    },
    {
        id: "wd_003",
        userName: "Naphat",
        accountNumber: "555-333-1111",
        bank: "SCB",
        amount: 5000,
        status: "completed",
        createdAt: "2025-11-20T08:00:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-20T08:00:00Z" 
            },
            { 
                status: "processing", 
                at: "2025-11-20T09:00:00Z" 
            },
            { 
                status: "completed", 
                at: "2025-11-20T11:00:00Z" 
            }
        ],
        attachments: [],
        note: "คืนเงินลูกค้า"
    },
    {
        id: "wd_004",
        userName: "Somchai",
        accountNumber: "123-456-7890",
        bank: "BBL",
        amount: 2500,
        status: "pending",
        createdAt: "2025-11-26T09:10:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-26T09:10:00Z" 
            }
        ],
        attachments: [],
        note: "เบิกค่าอะไหล่"
    },
    {
        id: "wd_005",
        userName: "Wirat",
        accountNumber: "987-654-3210",
        bank: "KBANK",
        amount: 1200,
        status: "processing",
        createdAt: "2025-11-25T13:30:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-25T13:30:00Z" 
            },
            { 
                status: "processing", 
                at: "2025-11-25T14:00:00Z" 
            }
        ],
        attachments: [
            {
                id: "a1",
                type: "image",
                name: "slip.jpg",
                url: SlipUrl
            }
        ],
        note: ""
    },
    {
        id: "wd_006",
        userName: "Naphat",
        accountNumber: "555-333-1111",
        bank: "SCB",
        amount: 5000,
        status: "completed",
        createdAt: "2025-11-20T08:00:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-20T08:00:00Z" 
            },
            { 
                status: "processing", 
                at: "2025-11-20T09:00:00Z" 
            },
            { 
                status: "completed", 
                at: "2025-11-20T11:00:00Z" 
            }
        ],
        attachments: [],
        note: "คืนเงินลูกค้า"
    },
    {
        id: "wd_011",
        userName: "Somchai",
        accountNumber: "123-456-7890",
        bank: "BBL",
        amount: 2500,
        status: "pending",
        createdAt: "2025-11-26T09:10:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-26T09:10:00Z" 
            }
        ],
        attachments: [],
        note: "เบิกค่าอะไหล่"
    },
    {
        id: "wd_012",
        userName: "Wirat",
        accountNumber: "987-654-3210",
        bank: "KBANK",
        amount: 1200,
        status: "processing",
        createdAt: "2025-11-25T13:30:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-25T13:30:00Z" 
            },
            { 
                status: "processing", 
                at: "2025-11-25T14:00:00Z" 
            }
        ],
        attachments: [
            {
                id: "a1",
                type: "image",
                name: "slip.jpg",
                url: SlipUrl
            }
        ],
        note: ""
    },
    {
        id: "wd_013",
        userName: "Naphat",
        accountNumber: "555-333-1111",
        bank: "SCB",
        amount: 5000,
        status: "completed",
        createdAt: "2025-11-20T08:00:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-20T08:00:00Z" 
            },
            { 
                status: "processing", 
                at: "2025-11-20T09:00:00Z" 
            },
            { 
                status: "completed", 
                at: "2025-11-20T11:00:00Z" 
            }
        ],
        attachments: [],
        note: "คืนเงินลูกค้า"
    },
    {
        id: "wd_014",
        userName: "Somchai",
        accountNumber: "123-456-7890",
        bank: "BBL",
        amount: 2500,
        status: "pending",
        createdAt: "2025-11-26T09:10:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-26T09:10:00Z" 
            }
        ],
        attachments: [],
        note: "เบิกค่าอะไหล่"
    },
    {
        id: "wd_015",
        userName: "Wirat",
        accountNumber: "987-654-3210",
        bank: "KBANK",
        amount: 1200,
        status: "processing",
        createdAt: "2025-11-25T13:30:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-25T13:30:00Z" 
            },
            { 
                status: "processing", 
                at: "2025-11-25T14:00:00Z" 
            }
        ],
        attachments: [
            {
                id: "a1",
                type: "image",
                name: "slip.png",
                url: SlipUrl
            }
        ],
        note: ""
    },
    {
        id: "wd_016",
        userName: "Naphat",
        accountNumber: "555-333-1111",
        bank: "SCB",
        amount: 5000,
        status: "completed",
        createdAt: "2025-11-20T08:00:00Z",
        history: [
            { 
                status: "pending", 
                at: "2025-11-20T08:00:00Z" 
            },
            { 
                status: "processing", 
                at: "2025-11-20T09:00:00Z" 
            },
            { 
                status: "completed", 
                at: "2025-11-20T11:00:00Z" 
            }
        ],
        attachments: [],
        note: "คืนเงินลูกค้า"
    }
]

export const SampleUser: User = {
    id: "999-999-9999",
    userName: "Thanapong",
    totalAmount: 10000,
}