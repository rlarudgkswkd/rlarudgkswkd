import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD
 */
 
let text = `# 세상에 선한 영향력을 끼치고 싶은 개발자 👋

## 이런 환경에 익숙해요✍🏼
- JAVA
- Postgresql
- MySQL
- Spring Boot

![Github Stats](https://github-readme-stats.vercel.app/api?username=rlarudgkswkd&show_icons=true)  
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/kyeong-han-kim-a1932ab4/)](https://www.linkedin.com/in/kyeong-han-kim-a1932ab4/) [![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rlarudgkswkd@gmail.com)](mailto:rlarudgkswkd@gmail.com)  
[![Solved.ac Profile](http://mazassumnida.wtf/api/v2/generate_badge?boj=rlarudgkswkd)](https://solved.ac/rlarudgkswkd/)  
![cka-certified-kubernetes-administrator](https://github.com/rlarudgkswkd/rlarudgkswkd/assets/48428850/0e3b6b5f-4d3c-4110-8419-7dca82d1183d)  

## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://honeybuzz-bee.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();
