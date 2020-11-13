//이미 풀었던 문제

function solution(a, b) {
    let answer = "";
    let week = 0;
    if (a==1)
        week = b%7;
    if (a==2)
        week = (b+31)%7;
    if (a==3)
        week = (b+60)%7;
    if (a==4)
        week = (b+91)%7;
    if (a==5)
        week = (b+121)%7;
    if (a==6)
        week = (b+152)%7;
    if (a==7)
        week = (b+182)%7;
    if (a==8)
        week = (b+213)%7;
    if (a==9)
        week = (b+244)%7;
    if (a==10)
        week = (b+274)%7;
    if (a==11)
        week = (b+305)%7;
    if (a==12)
        week = (b+335)%7;
    if (a<1 || a>12 || b<1 || b>31)
        week = -1;
        
    if (week==0)
        answer = "THU";	
    if (week==1)
        answer = "FRI";
    if (week==2)
        answer = "SAT";
    if (week==3)
        answer = "SUN";
    if (week==4)
        answer = "MON";
    if (week==5)
        answer = "TUE";
    if (week==6)
        answer = "WED";
    
    return answer;
}

/* 자바에서 이렇게 품
class Solution {
    public String solution(int a, int b) {
        String answer = "";
        int week = 0;
		if (a==1)
			week = b%7;
		if (a==2)
			week = (b+31)%7;
		if (a==3)
			week = (b+60)%7;
		if (a==4)
			week = (b+91)%7;
		if (a==5)
			week = (b+121)%7;
		if (a==6)
			week = (b+152)%7;
		if (a==7)
			week = (b+182)%7;
		if (a==8)
			week = (b+213)%7;
		if (a==9)
			week = (b+244)%7;
		if (a==10)
			week = (b+274)%7;
		if (a==11)
			week = (b+305)%7;
		if (a==12)
			week = (b+335)%7;
        if (a<1 || a>12 || b<1 || b>31)
			week = -1;
            
			
		
		if (week==0)
			answer = "THU";	
		if (week==1)
			answer = "FRI";
		if (week==2)
			answer = "SAT";
		if (week==3)
			answer = "SUN";
		if (week==4)
			answer = "MON";
		if (week==5)
			answer = "TUE";
		if (week==6)
			answer = "WED";
		
        return answer;
    }
}
*/