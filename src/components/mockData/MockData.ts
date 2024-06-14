import { Account } from "@/utils/types";

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Joe',
      lastName: 'Fanta',
      jointNames: '',
      username: 'sample1',
      password: 'sample1',
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 100500.23,
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'March 23rd 2024, 3:32:32 am',
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: 452.0,
        account_no: "****5009",
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Justin Loci',
        status: "Success",
        amount_usd: 1152.21,
        account_no: "****7676",
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Transfer',
        status: "Success",
        amount_usd: -100.0,
        account_no: "****4409",
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Payment',
        status: "Success",
        amount_usd: -50.0,
        account_no: "****5093",
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Online Purchase',
        status: "Success",
        amount_usd: -75.0,
        account_no: "****2334",
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'ATM Withdrawal',
        status: "Success",
        amount_usd: -150.0,
        account_no: "****3213",
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Transfer',
        status: "Pending",
        amount_usd: 200.0,
        account_no: "****4434",
      },
    ],
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Tracey',
      lastName: 'Julian',
      jointNames: '',
      username: 'Tracey4122',
      password: 'ilovedennie123',
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2500000.00,
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 30TH 2024, 3:32:32 am',
        description: "wire transfer from DALE CONSTRUCTION LIMITED",
        status: "Success",
        amount_usd: 2500000.0,
        account_no: "****5009",
      },
    ],
  },
];
