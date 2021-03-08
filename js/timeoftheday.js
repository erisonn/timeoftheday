let horas = document.querySelector('h1#horas')
        let parte_dia = document.querySelector('h2#parte_dia')
        let h = new Date()
        let agora = h.getHours()
        let minutos = h.getMinutes()

        
        if (agora<12 && agora>=6) {
            horas.innerHTML = (`São ${agora}:${minutos} da manhã!`)
            parte_dia.innerHTML = ('Bom dia!')
            document.querySelector('body.background').style.backgroundImage = "url('img/day.jpg')"
        }
        else if (agora<18 && agora>=12) {
            horas.innerHTML = (`São ${agora} horas da tarde!`)
            parte_dia.innerHTML = ('Boa tarde!')
            document.querySelector('body.background').style.backgroundImage = "url('img/afternoon.jpg')"
        }
        else if (agora<24 && agora>=18) {
            horas.innerHTML = (`São ${agora} horas da noite!`)
            parte_dia.innerHTML = ('Boa noite!')
            document.querySelector('body.background').style.backgroundImage = "url('img/night.jpg')"
        }
        else if (agora<6 && agora>0 || agora==24) {
            horas.innerHTML = (`São ${agora} horas da manhã!`)
            parte_dia.innerHTML = ('Boa madrugada!')
            document.querySelector('body.background').style.backgroundImage = "url('img/midnight.jpg')"
        }