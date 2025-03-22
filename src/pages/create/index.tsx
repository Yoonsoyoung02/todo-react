export default function Create() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#fff",
        paddingTop: "60px",
      }}
    >
      {/* 할 일 추가/수정 */}
      <div
        style={{
          width: "666px",
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          borderRadius: 8,
          background: "#fff",
          boxShadow:
            "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
          padding: "48px 32px",
          boxSizing: "border-box", // ✅ 박스 안쪽 패딩 고려
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "36px",
            fontWeight: "600",
            lineHeight: "44px", // ✅ line-height 보정
            color: "#111827",
            marginBottom: "24px",
          }}
        >
          할 일 추가/수정
        </h1>

        {/* 제목 */}
        <div style={{ width: "100%" }}>
          <label style={{ fontWeight: "bold" }}>제목</label>
          <input
            type='text'
            placeholder='제목을 입력하세요'
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginTop: "4px",
            }}
          />
        </div>

        {/* 내용 */}
        <div style={{ width: "100%", marginTop: "24px" }}>
          <label style={{ fontWeight: "bold" }}>내용</label>
          <textarea
            placeholder='내용을 입력하세요'
            style={{
              width: "100%",
              height: "98px",
              padding: "8px 12px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginTop: "4px",
            }}
          />
        </div>

        {/* 진행상황 */}
        <div style={{ width: "100%", marginTop: "24px" }}>
          <label style={{ fontWeight: "bold" }}>진행상황</label>
          <input
            type='text'
            placeholder='시작 전'
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginTop: "4px",
            }}
          />
        </div>

        {/* 날짜 */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            width: "100%",
            marginTop: "24px",
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={{ fontWeight: "bold" }}>시작 날짜</label>
            <input
              type='date'
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                marginTop: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={{ fontWeight: "bold" }}>종료 날짜</label>
            <input
              type='date'
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                marginTop: "4px",
              }}
            />
          </div>
        </div>

        {/* 담당자 */}
        <div style={{ width: "100%", marginTop: "24px" }}>
          <label style={{ fontWeight: "bold" }}>담당자</label>
          <input
            type='text'
            placeholder='담당자를 입력하세요'
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginTop: "4px",
            }}
          />
        </div>

        {/* 버튼 */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "32px",
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
              background: "#000",
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
