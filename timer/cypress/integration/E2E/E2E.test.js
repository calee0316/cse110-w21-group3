describe('language change tests, before start', () => {
    beforeEach(() => {
        cy.visit('../../index.html')
    })

    it('English to Korean, before start', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('시작')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('시작을 누르세요')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })
    it('English to Chinese, before start', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('开始')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('点击开始')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('English to Japanese, before start', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('開始')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('クリックして開始')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })

    it('Korean to English, before start', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('START')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Click Start To Begin')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Korean to Chinese, before start', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('开始')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('点击开始')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('Korean to Japanese, before start', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('開始')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('クリックして開始')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })

    
    it('Japanese to English, before start', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('START')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Click Start To Begin')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Japanese to Chinese, before start', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('开始')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('点击开始')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('Japanese to Korean, before start', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('시작')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('시작을 누르세요')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })

    it('Chinese to Korean, before start', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('시작')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('시작을 누르세요')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })

    it('Chinese to English, before start', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('START')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Click Start To Begin')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Chinese to Japanese, before start', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('開始')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('クリックして開始')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })
})


describe('language change tests, during work', () => {
    beforeEach(() => {
        cy.clock()
        cy.visit('../../index.html')
    })

    it('English to Korean', () => {
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('정지')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('작업')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })
    it('English to Chinese', () => {
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('结束')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('进行中')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('English to Japanese', () => {
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('終止')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('作業中')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })

    it('Korean to English', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('STOP')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Work')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Korean to Chinese', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('结束')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('进行中')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('Korean to Japanese', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('終止')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('作業中')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })

    
    it('Japanese to English', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('STOP')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Work')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Japanese to Chinese', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('结束')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('进行中')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('Japanese to Korean', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('정지')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('작업')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })

    it('Chinese to Korean', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('정지')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('작업')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })

    it('Chinese to English', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('STOP')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Work')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Chinese to Japanese', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#button').click()
        cy.tick(1000)
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('終止')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('作業中')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })
})

describe('language change tests, during rest', () => {
    beforeEach(() => {
        cy.clock()
        cy.visit('../../index.html')
    })

    it('English to Korean', () => {
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('정지')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('휴식')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })
    it('English to Chinese', () => {
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('结束')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('短休')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('English to Japanese', () => {
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('終止')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('短い休憩')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })

    it('Korean to English', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('STOP')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Rest')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Korean to Chinese', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('结束')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('短休')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('Korean to Japanese', () => {
        cy.get('#language-picker-select').select('korean')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('終止')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('短い休憩')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })

    
    it('Japanese to English', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('STOP')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Rest')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Japanese to Chinese', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('chinese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('chinese')
            expect($el.text()).contains('中文')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('关于我们')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('帕玛多拉 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('结束')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('短休')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('语言')
        })
    })

    it('Japanese to Korean', () => {
        cy.get('#language-picker-select').select('japanese')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('정지')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('휴식')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })

    it('Chinese to Korean', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('korean')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('korean')
            expect($el.text()).contains('한국어')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('팀 소개')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('완료된 포모')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('정지')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('휴식')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('언어')
        })
    })

    it('Chinese to English', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('english')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('english')
            expect($el.text()).contains('English')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('ABOUT US')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('SUCCESSFUL POMOS')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('STOP')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('Rest')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('Language')
        })
    })

    it('Chinese to Japanese', () => {
        cy.get('#language-picker-select').select('chinese')
        cy.get('#button').click()
        cy.tick(1501000)
        cy.get('#language-picker-select').select('japanese')
        cy.get('#language-picker-select').then($el => {
            expect($el).to.have.value('japanese')
            expect($el.text()).contains('日本語')
        })
        cy.get('#about').then($el => {
            expect($el.text()).contains('わたしたち')
        })
        cy.get('#message').then($el => {
            expect($el.text()).contains('ポモス 完成')
        })
        cy.get('#button').then($el => {
            expect($el.text()).contains('終止')
        })
        cy.get('#state').then($el => {
            expect($el.text()).contains('短い休憩')
        })
        cy.get('#lang_label').then($el => {
            expect($el.text()).contains('言語')
        })
    })
})

describe('language change tests, during long rest', () => {
        beforeEach(() => {
            cy.clock()
            cy.visit('../../index.html')
        })
    
        it('English to Korean', () => {
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('korean')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('korean')
                expect($el.text()).contains('한국어')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('팀 소개')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('완료된 포모')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('정지')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('긴 휴식')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('언어')
            })
        })
        it('English to Chinese', () => {
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('chinese')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('chinese')
                expect($el.text()).contains('中文')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('关于我们')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('帕玛多拉 完成')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('结束')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('长休')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('语言')
            })
        })
    
        it('English to Japanese', () => {
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('japanese')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('japanese')
                expect($el.text()).contains('日本語')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('わたしたち')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('ポモス 完成')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('終止')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('長い休憩')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('言語')
            })
        })
    
        it('Korean to English', () => {
            cy.get('#language-picker-select').select('korean')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('english')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('english')
                expect($el.text()).contains('English')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('ABOUT US')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('SUCCESSFUL POMOS')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('STOP')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('Long Rest')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('Language')
            })
        })
    
        it('Korean to Chinese', () => {
            cy.get('#language-picker-select').select('korean')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('chinese')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('chinese')
                expect($el.text()).contains('中文')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('关于我们')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('帕玛多拉 完成')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('结束')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('长休')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('语言')
            })
        })
    
        it('Korean to Japanese', () => {
            cy.get('#language-picker-select').select('korean')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('japanese')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('japanese')
                expect($el.text()).contains('日本語')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('わたしたち')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('ポモス 完成')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('終止')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('長い休憩')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('言語')
            })
        })
    
        
        it('Japanese to English', () => {
            cy.get('#language-picker-select').select('japanese')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('english')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('english')
                expect($el.text()).contains('English')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('ABOUT US')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('SUCCESSFUL POMOS')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('STOP')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('Long Rest')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('Language')
            })
        })
    
        it('Japanese to Chinese', () => {
            cy.get('#language-picker-select').select('japanese')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('chinese')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('chinese')
                expect($el.text()).contains('中文')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('关于我们')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('帕玛多拉 完成')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('结束')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('长休')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('语言')
            })
        })
    
        it('Japanese to Korean', () => {
            cy.get('#language-picker-select').select('japanese')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('korean')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('korean')
                expect($el.text()).contains('한국어')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('팀 소개')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('완료된 포모')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('정지')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('긴 휴식')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('언어')
            })
        })
    
        it('Chinese to Korean', () => {
            cy.get('#language-picker-select').select('chinese')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('korean')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('korean')
                expect($el.text()).contains('한국어')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('팀 소개')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('완료된 포모')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('정지')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('긴 휴식')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('언어')
            })
        })
    
        it('Chinese to English', () => {
            cy.get('#language-picker-select').select('chinese')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('english')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('english')
                expect($el.text()).contains('English')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('ABOUT US')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('SUCCESSFUL POMOS')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('STOP')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('Long Rest')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('Language')
            })
        })
    
        it('Chinese to Japanese', () => {
            cy.get('#language-picker-select').select('chinese')
            cy.get('#button').click()
            cy.tick(6907000)
            cy.get('#language-picker-select').select('japanese')
            cy.get('#language-picker-select').then($el => {
                expect($el).to.have.value('japanese')
                expect($el.text()).contains('日本語')
            })
            cy.get('#about').then($el => {
                expect($el.text()).contains('わたしたち')
            })
            cy.get('#message').then($el => {
                expect($el.text()).contains('ポモス 完成')
            })
            cy.get('#button').then($el => {
                expect($el.text()).contains('終止')
            })
            cy.get('#state').then($el => {
                expect($el.text()).contains('長い休憩')
            })
            cy.get('#lang_label').then($el => {
                expect($el.text()).contains('言語')
            })
        })
    })

