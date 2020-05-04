const todos = {
  filter: 'SHOW_ALL', // 리스트 필터 종류 [SHOW_ALL, SHOW_DOING, SHOW_DONE, SHOW_HOLD, SHOW_CLOSED, SHOW_ISSUE]
  contents: [
    {
      id: 'ASDF1234', // 아이템 아이디
      title: '', // 할일 주제
      desc: '', // 할일 설명
      progress: 'READY', // 진행 상태 [TODO, DOING, DONE, +HOLD, CLOSED, ISSUE]
      boss: null, // 보고자
      worker: null, // 담당자
      createdAt: null, // DATE - 생성일 YYYY.MM.DD HH:MM
      updatedAt: null // DATE - 수정일 YYYY.MM.DD HH:MM
    }
  ]
};
