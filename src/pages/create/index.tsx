export default function Create() {
  return (
    <div
      style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 1)",
      }}
    >

      <div
        style={{
          position: "relative",
          width: "666px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "48px 32px",
          rowGap: "10px",
          flexWrap: "wrap",
          alignContent: "flex-start",
          borderRadius: 8,
          background: "#FFFFFF",
          boxShadow:
            "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "36px",
            fontWeight: "600",
            lineHeight: "28px",
            letterSpacing: "0px",
            color: "#111827",
          }}
        >
          <b>할 일 추가/수정</b>
        </h1>

        {/* 제목 입력 필드 */}
        <div style={{ marginBottom: "4px", width: "100%" }}>
          <label>제목</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            style={{
              width: "100%",
              height: "26px",
              padding: "8px 12px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* 내용 입력 필드 */}
        <div style={{ marginTop: "24px", width: "100%" }}>
          <label>내용</label>
        </div>
        <div>
          <textarea
            placeholder="내용을 입력하세요"
            style={{
              width: "100%",
              height: "98px",
              padding: "8px 12px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* 진행상황 입력 필드 */}
        <div style={{ marginTop: "24px", width: "100%" }}>
          <label>진행상황</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="시작 전"
            style={{
              width: "100%",
              height: "26px",
              padding: "8px 12px",
              border: "1px solid #ccc",
              marginBottom: "24px",
            }}
          />
        </div>

        {/* 날짜 입력 필드 */}
        <div style={{ display: "flex", gap: "16px", width: "100%" }}>

          {/* 시작 날짜 */}
          <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <label>시작 날짜</label>
            <input
              type="date"
              style={{
                width: "100%",
                height: "26px",
                padding: "8px 12px",
                border: "1px solid #ccc",
                marginTop: "4px",
              }}
            />
          </div>

          {/* 종료 날짜 */}
          <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <label>종료 날짜</label>
            <input
              type="date"
              style={{
                width: "100%",
                height: "26px",
                padding: "8px 12px",
                border: "1px solid #ccc",
                marginTop: "4px",
              }}
            />
          </div>
        </div>

        {/* 담당자 입력 필드 */}
        <div style={{ marginTop: "24px", width: "100%" }}>
          <label>담당자</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="담당자를 입력하세요"
            style={{
              width: "100%",
              height: "26px",
              padding: "8px 12px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* 버튼 컨테이너 */}
        <div
          style={{
            width: "100%",
            height: "38px",
            padding: "16px",
            marginTop: "24px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              border: "1px solid #ccc",
              background: "#f5f5f5",
              cursor: "pointer",
            }}
          >
            취소
          </button>

          <button
            style={{
              padding: "8px 16px",
              border: "none",
              background: "rgba(0, 0, 0, 1)",
              color: "white",
              cursor: "pointer",
            }}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
