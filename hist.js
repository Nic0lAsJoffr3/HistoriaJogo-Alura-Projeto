let _historias = {
    "P0": {
        "Pergunta": "Você se encontra em sua casa.",
        "Respostas": 2,
        "Respostas0": {
            "Titulo": "Ir passear pela vila.",
            "Final": -1
        },
        "Respostas1": {
            "Titulo": "Ficar em casa.",
            "Final": 0
        },
    },
    //Linha correta.
    "P0R0": {
        "Pergunta": "Você sai sem rumo de casa, Para onde ir.",
        "Respostas": 2,
        "Respostas0": {
            "Titulo": "Para a biblioteca.",
            "Final": -1
        },
        "Respostas1": {
            "Titulo": "Para o ferreiro.",
            "Final": -1
        },
    },
    //rumo 0
    "P0R0R0": {
        "Pergunta": "Você vai a biblioteca, o que você faz",
        "Respostas": 2,
        "Respostas0": {
            "Titulo": "Pegar um livro.",
            "Final": -1
        },
        "Respostas1": {
            "Titulo": "Falar com o bibliotecario.",
            "Final": -1
        },
    },
    "P0R0R0R0": {
        "Pergunta": "Ao ler o livro voce nota menções sobre uma misteriosa caverna",
        "Respostas": 2,
        "Respostas0": {
            "Titulo": "Ir investigar.",
            "Final": 5
        },
        "Respostas1": {
            "Titulo": "Ignorar e voltar para a casa.",
            "Final": 1
        },
    },
    "P0R0R0R1": {
        "Pergunta": "Você fala com o bibliotecario e ele te dá uma misteriosa missão",
        "Respostas": 3,
        "Respostas0": {
            "Titulo": "Aceitar.",
            "Final": -1
        },
        "Respostas1": {
            "Titulo": "Pedir para ele explicar melhor.",
            "Final": -1
        },
        "Respostas2": {
            "Titulo": "Ignorar e voltar para a casa.",
            "Final": 1
        },
    },
    "P0R0R0R1R0": {
        "Pergunta": "Voce foi a caverna e encontra um goblin.",
        "Respostas": 2,
        "Respostas0": {
            "Titulo": "Ir ataca-lo.",
            "Final": 4
        },
        "Respostas1": {
            "Titulo": "Tentar fugir discretamente.",
            "Final": 3
        },
    },
    "P0R0R0R1R1R0": {
        "Pergunta": "Voce foi a caverna e encontra um goblin.",
        "Respostas": 2,
        "Respostas0": {
            "Titulo": "Ir ataca-lo.",
            "Final": 4
        },
        "Respostas1": {
            "Titulo": "Tentar fugir discretamente.",
            "Final": 3
        },
    },
    "P0R0R0R1R1": {
        "Pergunta": "O bibliotecario diz que ha rumores de um livro magico na caverna, e pagara muito bem a quem o encontrar.",
        "Respostas": 2,
        "Respostas0": {
            "Titulo": "Aceitar missão.",
            "Final": -1
        },
        "Respostas1": {
            "Titulo": "Recusar a missão.",
            "Final": 2
        },
    },
    //Rumo 1
    "P0R0R1": {
        "Pergunta": "Você vai ao ferreiro e ele te dá uma missão miteriosa.",
        "Respostas": 1,
        "Respostas0": {
            "Titulo": "Aceitar missão.",
            "Final": -1
        },
    },
    "P0R0R1R0": {
        "Pergunta": "O ferreirro te da armas e uma armadura, e te envia para uma caverna onde voce acha um goblin",
        "Respostas": 1,
        "Respostas0": {
            "Titulo": "Matar o goblin.",
            "Final": -1
        },
    },
    
    "P0R0R1R0R0": {
        "Pergunta": "Voce mata o goblin e pega um livro que esta com ele, o que fazer?",
        "Respostas": 2,
        "Respostas0": {
            "Titulo": "Pegar o livro e fugir para outra cidade e vende - lo.",
            "Final": -1
        },
        "Respostas1": {
            "Titulo": "Voltar com honra para a casa e entregar o livro ao ferreiro.",
            "Final": 6
        },
    },
    "P0R0R1R0R0R0": {
        "Pergunta": "Voce foje e vende o livro em outra cidade, ganha dinheiro o suficiente para viver feliz para sempre, mas caçadores estão a sua procura em nome do ferreiro.",
        "Respostas": 4,
        "Respostas0": {
            "Titulo": "Voce tenta batalhar contra os mercenarios",
            "Final": 7
        },
        "Respostas1": {
            "Titulo": "Voce tenta chamar a guarda da cidade",
            "Final": 8
        },
        "Respostas2": {
            "Titulo": "Voce foje novamente e passa o resto vida fugindo.",
            "Final": -1
        },
        "Respostas3": {
            "Titulo": "Voce se entrega aos mercenarios",
            "Final": 9
        },
    },
    
    "P0R0R1R0R0R0R2": {
        "Pergunta": "Embora seja uma triste vida, voce consegue viver assim.",
        "Respostas": 1,
        "Respostas0": {
            "Titulo": "Continuar vivendo.",
            "Final": 10
        },
    },
    //finais
    "F0": "Você fica em casa, horas depois sua casa misteriosamente pega fogo e você morre.",
    "F1": "Você volta para casa, horas depois sua casa misteriosamente é atingida por uma bola de fogo e voce morre.",
    "F2":"Você recusa a missão e sai da biblioteca, quando passa pela a porta uma bola de fogo cai misteriosamente do ceu e te acerta, voce morre.",
    "F3":"Voce tenta fugir da caverna discretamente, mas o goblin o percebe, te ataca, e te mata.",
    "F4":"Voce tentou atacar um goblin, estando sem arma?, ele te ataca e te mata.",
    "F5":"Voce vai investigar, ao ler o livro percebe que na carvena a perigos, voce se prepara, equipa armas e armadura, ao chegar na caverna voce encontra um goblin, voce o mata, e percebe que ele estava protegendo algo, um livro, voce o leva ao bibliotecario da cidade, ele compra seu livro, e voce tem dinheiro suficiente para viver feliz para sempre, mas quando sai da biblioteca, e assaltado por um cavaleiro de armadura negra, voce recusa a entregar a recompença, e ele te mata.",
    "F6":"Voce volta para a casa, entrega o livro para o ferreiro, ele te engana e não te paga, voce tenta pegar a força, mais falha e ele te mata.",
    "F7":"Voce realmente tentou batalhar com um grupo inteiro de mercenarios?, eles te matam.",
    "F8":"Voce ate tenta chamar os guardas , mais os mercenarios te matam antes. Voce realmente achou que daria certo?",
    "F9":"Voce é muito ingenuo, eles te matam da mesma forma",
    "F10":"Voce continua vivendo sua vida feliz, parabens esse é o unico final que voce não morre...<br><br><br><br>Após alguns dias os mercenarios te acham e te matam."
};
