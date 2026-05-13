document.addEventListener('DOMContentLoaded', () => {
    // 1. Progress Bar
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progressBar').style.width = scrolled + '%';
    });

    // 2. Scroll Animation (Intersection Observer)
    const steps = document.querySelectorAll('.step.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            }
        });
    }, observerOptions);

    steps.forEach(step => observer.observe(step));

    // 3. Quiz Data (ALL 8 Questions from Markdown)
    const quizzes = [
        {
            year: "100年題54",
            question: "抑制單純皰疹病毒之藥物 acyclovir，其標的為何？",
            options: [
                "（A）直接破壞病毒的組成，造成病毒結構解離",
                "（B）阻止病毒從寄主細胞中釋放出來",
                "（C）病毒胸腺激酶（thymidine kinase）",
                "（D）抑制病毒 RNA 合成酶（RNA polymerase）的作用"
            ],
            answer: 2,
            explanation: "（C）正確：Acyclovir 需經由病毒的 thymidine kinase 磷酸化才能產生藥效。A是錯的，它不破壞結構。B不抑制釋放。D不抑制 RNA 合成酶。"
        },
        {
            year: "101年51題",
            question: "單純皰疹病毒（Herpes simplex virus）之治療藥物樂威素（Acyclovir），其抑制病毒複製之機轉為何？",
            options: [
                "（A）阻止病毒胸腺激酶（thymidine kinase）作用",
                "（B）阻止病毒 DNA 之複製",
                "（C）阻止病毒附著於寄主細胞上",
                "（D）阻止病毒之解體（uncoating）"
            ],
            answer: 1,
            explanation: "（B）正確：Acyclovir-TP 可競爭抑制病毒 DNA 聚合酶，引起 DNA 鏈終止。"
        },
        {
            year: "105年53題",
            question: "常用來治療疱疹病毒的阿昔洛韋（Acyclovir）會被病毒的何種酵素磷酸化，進而抑制病毒的複製？",
            options: [
                "（A）胞苷激酶（cytidine kinase）",
                "（B）胸苷激酶（thymidine kinase）",
                "（C）酪氨酸激酶（tyrosine kinase）",
                "（D）周期蛋白依賴性激酶（cyclin dependent kinase）"
            ],
            answer: 1,
            explanation: "（B）正確：Acyclovir 活化第一步由病毒自身的 thymidine kinase (Viral TK) 磷酸化為 ACV-MP。"
        },
        {
            year: "100年題74",
            question: "下列何種藥物與 zidovudine 合併治療愛滋病人，將導致貧血及嗜中性白血球減少症惡化？",
            options: [
                "（A）Ganciclovir",
                "（B）Acyclovir",
                "（C）Pentamidine",
                "（D）Stavudine"
            ],
            answer: 0,
            explanation: "（A）正確。Ganciclovir 有顯著骨髓抑制毒性。Acyclovir (B) 是干擾項，其骨髓毒性極低且對 HIV 無效，不會加重骨髓毒性。"
        },
        {
            year: "106年題51",
            question: "關於抗病毒藥物 acyclovir 之敘述，下列何者正確？",
            options: [
                "（A）為 adenosine 衍生物",
                "（B）須被宿主細胞之 thymidine kinase 加入第一個磷酸根後才易被活化產生藥效",
                "（C）只會作用於被病毒感染細胞，不會影響其他正常細胞",
                "（D）用於治療人類免疫缺乏病毒（HIV）感染所引起之疾病"
            ],
            answer: 2,
            explanation: "（C）正確：因活化需 Viral TK，只有受感染細胞才能大量產生 ACV-TP。A是 guanosine 衍生物。B第一步是病毒的 TK。D對 HIV 無效。"
        },
        {
            year: "108年題62",
            question: "下列何者會先被病毒的thymidine kinase磷酸化而干擾病毒複製，因此對被感染的細胞具選擇性，主要用於治療疱疹病毒（herpes viruses）的感染？",
            options: [
                "（A）abacavir",
                "（B）acyclovir",
                "（C）amantadine",
                "（D）azidothymidine"
            ],
            answer: 1,
            explanation: "（B）正確：Acyclovir 為 guanosine analogue，經 viral TK 磷酸化後才能抑制病毒複製。A, D 是用於 HIV，C 是用於 A 型流感。"
        },
        {
            year: "110題52",
            question: "關於抗疱疹病毒藥 acyclovir 之敘述，下列何者正確？",
            options: [
                "（A）可有效作用在潛伏期病毒",
                "（B）此藥物須經由病毒特定胸苷激酶（virus-specified thymidine kinase）將其磷酸化才具活性",
                "（C）抗藥性的發生可因為病毒中的 DNA 聚合酶產生變異，與病人免疫功能低下無關",
                "（D）對 acyclovir 產生抗藥性時，替代藥物 valacyclovir 會比 trifluridine 適合"
            ],
            answer: 1,
            explanation: "（B）正確。A錯：潛伏期無 Viral TK 表現。C錯：免疫低下更易有抗藥株。D錯：Valacyclovir 也是 acyclovir 前驅藥，抗藥時同樣無效，應改用 Foscarnet。"
        },
        {
            year: "113年題53",
            question: "下列抗病毒藥物中，何者可對抗 HIV 病毒，用於治療愛滋病？",
            options: [
                "（A）amantadine",
                "（B）ganciclovir",
                "（C）acyclovir",
                "（D）zidovudine"
            ],
            answer: 3,
            explanation: "（D）正確：Zidovudine (AZT) 為 NRTI，用於 HIV。Acyclovir 用於 HSV，Ganciclovir 用於 CMV。"
        }
    ];

    const quizContainer = document.getElementById('quiz-container');

    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement('div');
        quizCard.className = 'quiz-card';
        
        const optionsHtml = quiz.options.map((opt, i) => 
            `<div class="quiz-opt" data-index="${i}">${opt}</div>`
        ).join('');

        quizCard.innerHTML = `
            <div class="quiz-meta">問題 ${index + 1} / 8 &nbsp;—&nbsp; ${quiz.year}</div>
            <div class="quiz-q">${quiz.question}</div>
            <div class="quiz-options">${optionsHtml}</div>
            <div class="quiz-exp">
                <strong>💡 詳解：</strong><br>${quiz.explanation}
            </div>
        `;

        quizContainer.appendChild(quizCard);

        const options = quizCard.querySelectorAll('.quiz-opt');
        const explanation = quizCard.querySelector('.quiz-exp');
        let answered = false;

        options.forEach(opt => {
            opt.addEventListener('click', function() {
                if (answered) return;
                answered = true;
                
                const selectedIdx = parseInt(this.getAttribute('data-index'));
                
                if (selectedIdx === quiz.answer) {
                    this.classList.add('selected', 'correct');
                } else {
                    this.classList.add('selected', 'wrong');
                    options[quiz.answer].classList.add('show-correct');
                }
                
                explanation.classList.add('show');
            });
        });
    });
});
