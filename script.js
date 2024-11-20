function getRandomMission() {
    const words = ["Happy", "Sad", "Big", "Small", "Friend", "Love", "Hot", "Play", "Eat", "Kind"]; // 단어 목록
    const randomIndex = Math.floor(Math.random() * words.length); // 무작위 인덱스 생성
    return words[randomIndex]; // 무작위 단어 반환
}

function showContent() {
    // 첫 번째 버튼 숨기기
    document.getElementById("show-content-button").style.display = "none";
    
    // 콘텐츠 보이기
    document.getElementById("game-container").style.display = "block";
}

function initializeGame() {
    const missionText = document.getElementById("mission-text");
    const randomWord = getRandomMission();
    missionText.textContent = `Make a person say "${randomWord}". 
    You can’t let them know your mission...`;
}

function markSuccess() {
    document.getElementById("success-message").style.display = 'block';
    document.getElementById("success-button").style.display = 'none';
}

// 페이지 로딩 시 게임 초기화
document.addEventListener("DOMContentLoaded", initializeGame);