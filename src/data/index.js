export default {
    User: [
      {
        user_id: 1,
        name: 'Michelle',
        created_at: '2019-12-04 02:42:11'
      },
      {
        user_id: 2,
        name: 'Mari',
        created_at: '2019-12-04 06:42:11'
      },
      {
        user_id: 3,
        name: 'Siwon',
        created_at: '2019-12-04 11:42:11'
      },
    ],
    Content: [
      {
        content_id: 1,
        user_id: 1,
        title: '자유게시판',
        context: '안녕하세요',
        created_at: '2019-12-04 03:07:32',
        updated_at: null
      },
      {
        content_id: 2,
        user_id: 3,
        title: '테스트 중...',
        context: '화이팅!',
        created_at: '2019-12-04 13:11:42',
        updated_at: null
      },
      {
        content_id: 3,
        user_id: 2,
        title: '제목을 입력하세요.',
        context: '^^',
        created_at: '2019-12-04 09:23:12',
        updated_at: null
      },
      {
        content_id: 4,
        user_id: 3,
        title: '제목을 입력하세요.',
        context: 'test',
        created_at: '2019-12-04 09:23:12',
        updated_at: null
      },
      { content_id: 5, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 6, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 7, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 8, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 9, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 10, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 11, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 12, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 13, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 14, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 15, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 16, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 17, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 18, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 19, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 20, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 21, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 22, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
      ,{ content_id: 23, user_id: 3, title: '제목을 입력하세요.', context: 'test', created_at: '2019-12-04 09:23:12', updated_at: null }
    ],
    Comment: [
      {
        comment_id: 1,
        user_id: 1,
        content_id: 3,
        context: '댓글 1',
        created_at: '2019-12-04 14:11:11',
        updated_at: null
      },
      {
        comment_id: 2,
        user_id: 3,
        content_id: 3,
        context: '안녕하세요',
        created_at: '2019-12-04 16:11:11',
        updated_at: null
      },
      {
        comment_id: 3,
        user_id: 2,
        content_id: 1,
        context: '안녕하세요 ^^',
        created_at: '2019-12-04 14:11:11',
        updated_at: null
      }
    ],
    SubComment: [
      {
        subcomment_id: 1,
        comment_id: 3,
        user_id: 1,
        context: '댓댓글달기',
        created_at: '2019-12-04 16:22:11',
        updated_at: null
      }
    ]
  }