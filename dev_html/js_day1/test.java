// 조회된 채팅리스트
String resultList = "";

String chNo = ""; // 채팅방 번호
String ctitle = ""; // 채팅방 타이틀
List<ChatListVO> lChatList = new ArrayList<>();
lChatList = (List<ChatListVO>) mChatList.get("CHAT_LIST");
ArrayList<Integer> countList = (ArrayList<Integer>) mChatList.get("COUNT");
int chCount;

for (int i = 0; i < lChatList.size() - 1; i++) {
    chNo = Integer.toString(lChatList.get(i).getChat_no());
    ctitle = lChatList.get(i).getChat_title();
    chCount = countList.get(i);

    resultList += (chNo + "|" + ctitle + "|" + chCount + "#");
}
chNo = Integer.toString(lChatList.get(lChatList.size() - 1).getChat_no());
ctitle = lChatList.get(lChatList.size() - 1).getChat_title();
chCount = countList.get(countList.size() - 1);

resultList += (chNo + "|" + ctitle + "|" + chCount);















// 친구리스트 호출 쿼리문
StringBuilder sql = new StringBuilder();
sql.append("SELECT ur.user_nickname FROM     ");
sql.append("        (SELECT f_id FROM tb_friends_list WHERE user_id= ? ) fl   ");
sql.append("        , (SELECT user_id, user_nickname FROM tb_user) ur    ");
sql.append("WHERE fl.f_id = ur.user_id  ");

try {
    // 오라클 서버와 연결
    conn = dbMgr.getConnection();
    pstmt = conn.prepareStatement(sql.toString());

    // 쿼리문 내 파라미터 값
    pstmt.setString(1, uservo.getUser_id());

    rs = pstmt.executeQuery();

    // 친구리스트 쿼리결과값 있을 경우
    while (rs.next()) {
        String f = rs.getString(1);
        vfList.add(f);

        // EXIST_FRIEND = 친구 검색 존재
        protocol = 607;
    }

    for (int i = 0; i < vfList.size() - 1; i++) {
        friends += vfList.get(i) + "#";
    }
    friends += vfList.get(vfList.size() - 1);
}