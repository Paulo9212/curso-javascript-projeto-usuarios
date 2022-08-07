class Utils {

    static dateFormat(date){
    
        return date.getDate()+'/'+(date.getDate()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
    }
}