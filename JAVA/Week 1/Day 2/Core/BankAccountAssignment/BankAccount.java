public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;

    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    public BankAccount () {
        
    }
    public BankAccount (double checkingBalance, double savingsBalance ) {
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        accounts ++;
        totalMoney += this.checkingBalance + this.savingsBalance;
    }


    // Be sure to increment the number of accounts

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance(){
        return this.checkingBalance;
    }
    public void  setCheckingBalance(double checkingBalance){
        this.checkingBalance = checkingBalance;
    }
    public double getSavingsBalance(){
        return this.savingsBalance;
    }
    public void  setSavingsBalance(double savingBalance){
        this.savingsBalance = savingBalance;
    }
    public static int getAccounts(){
        return BankAccount.accounts;
    }
    public void  setAccounts( int accounts){
        BankAccount.accounts = accounts;
    }
    public static double getTotalMoney(){
        return BankAccount.totalMoney;
    }
    public void  setTotalMoney( double totalMoney){
        BankAccount.totalMoney = totalMoney;
    }

    

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void depositChecking (double depositMoney){
        this.checkingBalance += depositMoney;
    } 
    public void depositSavings (double depositMoney){
        this.savingsBalance += depositMoney;
    } 

   // withdraw 
    public void withdrawChecking (double withdrawMoney){
       if ( this.checkingBalance > withdrawMoney ){
        this.checkingBalance -= withdrawMoney;
       }
       else {  System.out.println("your balance is insufisant");
       }
    } 
    public void withdrawSavings (double withdrawMoney){
        if ( this.checkingBalance > withdrawMoney){
        this.savingsBalance -= withdrawMoney;
        }
        else {  System.out.println("your balance is insufisant");
        }
        
    }
 public getBalance (){
    return this.checkingBalance + this.savingsBalance;
 }
 

 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account
}
