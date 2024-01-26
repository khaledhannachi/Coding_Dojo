public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount userAccount1 = new BankAccount(1200.0,500.0 );
        BankAccount userAccount2 = new BankAccount(1500.0,700.0 );
        BankAccount userAccount3 = new BankAccount(2200.0,1000.0 );

// Account 1
        System.out.println(userAccount1.getCheckingBalance());
        System.out.println(userAccount1.getSavingsBalance());
        System.out.println(BankAccount.getAccounts());
        System.out.println(BankAccount.getTotalMoney());
// Account 2
        System.out.println(userAccount2.getCheckingBalance());
        System.out.println(userAccount2.getSavingsBalance());
        System.out.println(BankAccount.getAccounts());
        System.out.println(BankAccount.getTotalMoney());
// Account 3
        System.out.println(userAccount3.getCheckingBalance());
        System.out.println(userAccount3.getSavingsBalance());
        System.out.println(BankAccount.getAccounts());
        System.out.println(BankAccount.getTotalMoney());


    // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney

        userAccount1.depositChecking (600.00);
        userAccount1.depositSavings (450.00);
        System.out.println(userAccount1.getCheckingBalance());
        System.out.println(userAccount1.getSavingsBalance());

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        userAccount2.withdrawChecking (450.00);
        userAccount2.withdrawSavings (750.00);
        System.out.println(userAccount2.getCheckingBalance());
        System.out.println(userAccount2.getSavingsBalance());
        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.println(userAccount1.getBalance());
    }
}
