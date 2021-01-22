function kilometerToMeter(distence){
    if(distence >= 0){
        var meter = distence * 1000;
        return meter;
    }
    else{
        return "Plz give positive value";
    }
}



function budgetCalculator(watch, mobile, laptop){
    if(watch >= 0 && mobile >= 0 && laptop >= 0){
        var watch, mobile, laptop, totalPrize;
        watch = 50 * watch;
        mobile = 100 * mobile;
        laptop = 500 * laptop;
        totalPrize = watch + mobile + laptop;
        return totalPrize;
    }
    else{
        return "I could not claculate nargetive prize"
    }
}


function hotelCost(days){
    var hotelVara;
    if(days <= 10){
        hotelVara = days * 100;
    }
    else if(days <=20){
        hotelVara =10*100+(days - 10) * 80;
    }
    else if(days > 20){
        hotelVara = 10 * 100 +10 * 80 +(days-20)* 50;
    }
    return hotelVara;
   
}


function megaFriend(friends){
    var largestFriendName = friends[0];
    if(friends.length == 0){
        return "Please, Add your friend Name";
    }
    else{
        for(var i = 0; i < friends.length; i++){
            var element = friends[i];
            if(element.length >= largestFriendName.length){
                largestFriendName = element;   
            }
        }
    }
    return largestFriendName;
}
