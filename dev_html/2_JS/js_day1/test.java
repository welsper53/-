case Protocol.SRCH_USERS: {
    String user_id = st.nextToken();
    int num = st.countTokens();

    if (num > 0) {
        String friend_id = st.nextToken();
        System.out.println("검색한 사용자 : " + friend_id);

        // DB등록 및 체크
        server.jta_log.append("main다이얼로그 사용자 검색\n");
        List<Object> list = friendLogic.findAllUser(user_id, friend_id);