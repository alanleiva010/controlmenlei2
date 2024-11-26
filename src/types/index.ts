// Previous types remain the same...

export interface Transaction {
  id: string;
  date: Date;
  clientId: string;
  operatorId: string;
  operationType: string;
  currencyOperation: string;
  bankId: string;
  amount: number;
  exchangeRate?: number;
  calculatedAmount?: number;
  description?: string;
  attachmentUrl?: string;
  attachmentName?: string; // Add attachment name
}

export interface OperationType {
  id: string;
  name: string;
  code: string;
  description?: string;
  active: boolean;
}