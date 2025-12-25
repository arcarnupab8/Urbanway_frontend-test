
export type WithdrawalStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'canceled';

export type AttachmentType = 'image' | 'video' | 'document';

export type DatetimeString = string;

export interface History {
  status: WithdrawalStatus,
  at: DatetimeString,
};

export interface Attachment {
  id: string,
  type: AttachmentType,
  name: string,
  url: string,
}

export interface Withdrawal {
  id: string,
  userName: string,
  accountNumber: string,
  bank: string,
  amount: number,
  status: WithdrawalStatus,
  createdAt: DatetimeString,
  history: History[],
  attachments: Attachment[],
  note: string,
}

export interface User {
  id: string,
  userName: string,
  totalAmount: number,
}