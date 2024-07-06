export enum ETransaction {
    PENDING='pending',
    FAILED='failed', 
    COMPLETED='completed', 
    REFUND='refund'
}

export type TTransaction = {
  id:number,
  courseid:number,
  userid:number,
  price:number,
  datetime: string,
  transactioncategoryid: number,
  status: 'pending'| 'failed' | 'completed' | 'refund'
}