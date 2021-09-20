let app = new Vue({
    el : '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
           
        ],
        indexContact: 0,
        newMessage: '',
        
    },
    methods : {

        logoExtractor: function(index){
            return `img/avatar${this.contacts[index].avatar}.jpg`;
        },
        boxSelector: function(indexElement){
            this.indexContact = indexElement;
        },
        lastMessage: function(){
            let indexDate =0;
            indexDate =  this.contacts[this.indexContact].messages.length -1;
                if (this.contacts[this.indexContact].messages[indexDate].status == 'sent'){
                    indexDate--;
                }
                return indexDate;
        },
        takeHalf: function(element){
            let index =0;
            index =  element.messages.length -1;
            let s = '' ;
            s = element.messages[index].text;    
            let piece = Math.floor(s.length * 0.75);
            s = s.slice(0, piece) + '...' ;
            return s;
        },
        myFunction: function() {
            let input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("input-search");
            filter = input.value.toUpperCase();
            ul = document.getElementById("my-ul");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("div")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        },
       
        messageAdder :  function(){
            let d = new Date();
            let currentDay= d.getDate();
            let currentMonth = d.getMonth() +1;
            let currentYear = d.getFullYear();
            let currentHour= d.getUTCHours();
            let currentMinut=d.getMinutes();
            let currentSeconds=d.getSeconds();
            let currentDate= `${currentDay}/${currentMonth}/${currentYear} ${currentHour}:${currentMinut}:${currentSeconds}`;
            
            if(this.newMessage.trim('').length > 0){
                
                this.contacts[this.indexContact].messages.push({
                    date: currentDate,
                    text : this.newMessage,
                    status: 'sent'
                })
                this.newMessage='';
            };
            
            let  contacts = this.contacts;
            let  indexContact = this.indexContact;
            let    messages = this.messages;

            setTimeout(() => {
                contacts[indexContact].messages.push({
                    date: currentDate,
                    text : 'Ok',
                    status: 'received'
                })
              
            },3000)
        }       
    },
    
});
