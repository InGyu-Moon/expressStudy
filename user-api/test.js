// 목표 : 비동기 처리에 대한 이해
// Promise 와 async, await 를 이용해 아래 코드를 순차적으로 실행시키기
// 기대 결과. 아래 처럼 콘솔에 출력되어야 함
// 실행
// 1초 기다리는 중
// 완료
(async () => {
    console.log('실행')

    // 주석 사이에 코드 작성

    await new Promise((res,rej)=>{
        setTimeout(() => {
            res(console.log('1초 기다리는 중'))
        }, 1000)
    })

    // 여기 까지

    console.log("완료")
})()