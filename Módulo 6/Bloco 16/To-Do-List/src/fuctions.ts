export const removeSpace = ( value: string ): boolean => {
    return /\s/g.test(value)
};

export const convertDate = ( date: string ): any => {
    return date.split("/").reverse().join("-");;
};

const date: Date = new Date();
const  day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();

export const currentDate = year + "-" + month + "-" + day;

export const revertDate = ( date: any ): any => {
    const taskDate: any = new Date(date);
    const  day = String(taskDate.getDate()).padStart(2, '0');
    const month = String(taskDate.getMonth() + 1).padStart(2, '0');
    const year = taskDate.getFullYear();
    const currentDate = day + "/" + month + "/" + year;
    return currentDate;
}; 