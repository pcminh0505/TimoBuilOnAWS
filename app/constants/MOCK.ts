import moment from "moment"

export const MOCK_USER = {
  id: "1",
  name: "Huynh Phuong Vy",
  email: "huynhphuongvy0618@gmail.com",
  gender: "female",
  organization: "RMIT University",
  job: "undergraduate",
  birthday: "12-Mar-01",
  spend_account: {
    code: "7847581641989",
    balance: 0,
    actualBalance: 0,
    plannedExpenditure: 6414670,
    actualExpenditure: 6568000,
  },
  transactions: [
    {
      id: "100000",
      amount: 2000000,
      type: "IN",
      createdAt: moment().startOf("month").unix(),
      description: "Transfer from bank account",
      from: "Sacombank",
      to: "spendAccount",
    },
    {
      id: "100001",
      amount: 25000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Breakfast",
      from: "spendAccount",
      to: "Circle K An Duong Vuong",
      category: "f&b",
    },
    {
      id: "100002",
      amount: 456670,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Two-week grocery",
      from: "spendAccount",
      to: "Co.opMart Cong Quynh",
      category: "f&b",
    },
    {
      id: "100003",
      amount: 100000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Petrol",
      from: "spendAccount",
      to: "Petrolimex Nguyen Van Cu ",
      category: "vehicle",
    },
    {
      id: "100004",
      amount: 1300000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Apartment's management fee ",
      from: "spendAccount",
      to: "Everrich Infinity Apartment",
      category: "misc",
    },
    {
      id: "100005",
      amount: 2400000,
      type: "IN",
      createdAt: moment().startOf("month").unix(),
      description: "Income from part-time job ",
      from: "RMIT",
      to: "spendAccount",
    },
    {
      id: "100006",
      amount: 1000000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Top-up into TCBS account",
      from: "spendAccount",
      to: "TCBS",
      category: "investment",
    },
    {
      id: "100007",
      amount: 254000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "New clothes",
      from: "spendAccount",
      to: "Shopee",
      category: "shopping",
    },
    {
      id: "100008",
      amount: 417000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Goal save W1",
      from: "spendAccount",
      to: "PiggyBank",
      category: "goal_save",
    },
    {
      id: "100009",
      amount: 32000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Bubble tea",
      from: "spendAccount",
      to: "Baemin",
      category: "f&b",
    },
    {
      id: "100010",
      amount: 276000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Dining out with friends",
      from: "spendAccount",
      to: "Baozi Ho Tung Mau",
      category: "f&b",
    },
    {
      id: "100011",
      amount: 120000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Stationary",
      from: "spendAccount",
      to: "FAHASA Nguyen Hue",
      category: "misc",
    },
    {
      id: "100012",
      amount: 1530000,
      type: "IN",
      createdAt: moment().startOf("month").unix(),
      description: "Gain from stock trading",
      from: "TCBS",
      to: "spendAccount",
    },
    {
      id: "100013",
      amount: 417000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Goal save W2",
      from: "spendAccount",
      to: "PiggyBank",
      category: "goal_save",
    },
    {
      id: "100014",
      amount: 65000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Netflix monthly subscription",
      from: "spendAccount",
      to: "Netflix",
      category: "shopping & entertainment",
    },
    {
      id: "100015",
      amount: 19000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Apple iCloud monthly subscription",
      from: "spendAccount",
      to: "Apple ID",
      category: "misc",
    },
    {
      id: "100016",
      amount: 521000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Two-week grocery",
      from: "spendAccount",
      to: "Co.opMart Cong Quynh",
      category: "f&b",
    },
    {
      id: "100017",
      amount: 35000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "GrabCar to District 1",
      from: "spendAccount",
      to: "Grab",
      category: "vehicle",
    },
    {
      id: "100018",
      amount: 32000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "GrabCar to home",
      from: "spendAccount",
      to: "Grab",
      category: "vehicle",
    },
    {
      id: "100019",
      amount: 120000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Dining out with friends",
      from: "spendAccount",
      to: "Pizza 4P's",
      category: "f&b",
    },
    {
      id: "100020",
      amount: 417000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Goal save W3",
      from: "spendAccount",
      to: "PiggyBank",
      category: "goal_save",
    },
    {
      id: "100021",
      amount: 2000000,
      type: "IN",
      createdAt: moment().startOf("month").unix(),
      description: "Pocket money from parents",
      from: "Parents' account",
      to: "spendAccount",
    },
    {
      id: "100022",
      amount: 560000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "New clothes & accessories",
      from: "spendAccount",
      to: "Uniqlo",
      category: "shopping & entertainment",
    },
    {
      id: "100023",
      amount: 417000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Goal save W4",
      from: "spendAccount",
      to: "PiggyBank",
      category: "goal_save",
    },
    {
      id: "100024",
      amount: 45000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Bubble tea",
      from: "spendAccount",
      to: "Baemin",
      category: "f&b",
    },
    {
      id: "100025",
      amount: 40000,
      type: "OUT",
      createdAt: moment().startOf("month").unix(),
      description: "Coffee at school",
      from: "spendAccount",
      to: "Highlands",
      category: "f&b",
    },
  ],
  template: {
    Sheet1: {
      "f&b": {
        range: 3000000,
        data: [
          {
            id: "100001",
            amount: 25000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Breakfast",
            from: "spendAccount",
            to: "Circle K An Duong Vuong",
          },
          {
            id: "100002",
            amount: 456670,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Two-week grocery",
            from: "spendAccount",
            to: "Co.opMart Cong Quynh",
          },
          {
            id: "100009",
            amount: 32000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Bubble tea",
            from: "spendAccount",
            to: "Baemin",
          },
          {
            id: "100010",
            amount: 276000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Dining out with friends",
            from: "spendAccount",
            to: "Baozi Ho Tung Mau",
          },
          {
            id: "100016",
            amount: 521000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Two-week grocery",
            from: "spendAccount",
            to: "Co.opMart Cong Quynh",
          },
          {
            id: "100019",
            amount: 120000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Dining out with friends",
            from: "spendAccount",
            to: "Pizza 4P's",
          },
          {
            id: "100024",
            amount: 45000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Bubble tea",
            from: "spendAccount",
            to: "Baemin",
          },
          {
            id: "100025",
            amount: 40000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Coffee at school",
            from: "spendAccount",
            to: "Highlands",
          },
        ],
      },
      vehicle: {
        range: 500000,
        data: [
          {
            id: "100003",
            amount: 100000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Petrol",
            from: "spendAccount",
            to: "Petrolimex Nguyen Van Cu ",
          },
          {
            id: "100017",
            amount: 35000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "GrabCar to District 1",
            from: "spendAccount",
            to: "Grab",
          },
          {
            id: "100018",
            amount: 32000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "GrabCar to home",
            from: "spendAccount",
            to: "Grab",
          },
        ],
      },
      "shopping & entertainment": {
        range: 1000000,
        data: [
          {
            id: "100007",
            amount: 254000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "New clothes",
            from: "spendAccount",
            to: "Shopee",
          },
          {
            id: "100014",
            amount: 65000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Netflix monthly subscription",
            from: "spendAccount",
            to: "Netflix",
          },
          {
            id: "100022",
            amount: 560000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "New clothes & accessories",
            from: "spendAccount",
            to: "Uniqlo",
          },
        ],
      },
      investment: {
        range: 1500000,
        data: [
          {
            id: "100006",
            amount: 1000000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Top-up into TCBS account",
            from: "spendAccount",
            to: "TCBS",
          },
        ],
      },
      misc: {
        range: 2000000,
        data: [
          {
            id: "100004",
            amount: 1300000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Apartment's management fee ",
            from: "spendAccount",
            to: "Everrich Infinity Apartment",
          },
          {
            id: "100011",
            amount: 120000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Stationary",
            from: "spendAccount",
            to: "FAHASA Nguyen Hue",
          },
          {
            id: "100015",
            amount: 19000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Apple iCloud monthly subscription",
            from: "spendAccount",
            to: "Apple ID",
          },
        ],
      },
      "Goal Save": {
        range: 5000000,
        data: [
          {
            id: "100013",
            amount: 417000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Goal save W2",
            from: "spendAccount",
            to: "PiggyBank",
          },
          {
            id: "100020",
            amount: 417000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Goal save W3",
            from: "spendAccount",
            to: "PiggyBank",
          },
          {
            id: "100023",
            amount: 417000,
            type: "OUT",
            createdAt: moment().startOf("month").unix(),
            description: "Goal save W4",
            from: "spendAccount",
            to: "PiggyBank",
          },
        ],
      },
    },
  },
  piggyBank: {
    goals: [
      {
        goal_id: "G1001",
        name: "Mario Game Series",
        target: "2000000",
        current_progress: "1336000",
        create_date: moment().startOf("month").unix(),
        end_date: moment().startOf("month").add(2, "months").unix(),
        weekly_amount: 167000,
      },
      {
        goal_id: "G1002",
        name: "Airpod 2",
        target: "4000000",
        current_progress: "2000000",
        create_date: moment().startOf("month").unix(),
        end_date: moment().startOf("month").add(3, "months").unix(),
        weekly_amount: 250000,
      },
    ],
    gameInfo: [
      {
        name: "Vy Con",
        age: "3",
        exp: "350",
        gender: "female",
        balance: "2500000",
      },
    ],
  },
}
