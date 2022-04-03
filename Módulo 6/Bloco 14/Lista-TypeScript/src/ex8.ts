const birthday = ( birthDay: number, birthdayMonth: number, birthdayYear: number ) => {
    const currentDate = new Date,
    current_day = currentDate.getDate(),
    current_month = currentDate.getMonth() + 1,
    current_year = currentDate.getFullYear()

    let howOld = current_year - birthdayYear;

    if (current_month < birthdayMonth || current_month == birthdayMonth && birthDay < current_day) {
            howOld--;
        };

    return  howOld < 0 ? 0 : howOld;
};

const walletIssue = ( day: number, month: number, year: number ) => {
    const currentDate = new Date,
    current_day = currentDate.getDate(),
    current_month = currentDate.getMonth() + 1,
    current_year = currentDate.getFullYear()

    let emission = current_year - year;

    if (current_month < month || current_month == month && day < current_day) {
            emission--;
        };

    return  emission < 0 ? 0 : emission;
};

const birthDayValue = birthday(1, 1, 2001);
const walletIssueValue = walletIssue(1, 1, 2017);

const check = ( valueBirthDay: number,valueWalletIssue?: number ) => {

    if ( valueBirthDay <= 20 ) {
         if ( valueWalletIssue <= 20 && valueWalletIssue === 5 ) {
             return "Sua carteira deve ser renovada agora.";
         };
        return true;

    } else if ( valueBirthDay >= 20 && valueBirthDay <= 50 ) {
        if( valueBirthDay >= 20 && valueBirthDay <= 50 && valueWalletIssue === 10 ) {
            return "!Sua carteira deve ser renovada agora";
        } ;
        return true;

    } else if (  valueBirthDay > 50  ) {
        return true;
    } else {
        return false;
    };
};
// console.log(check(birthDayValue, walletIssueValue));