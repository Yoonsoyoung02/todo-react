import React from "react";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f8f9fa",
        padding: "32px",
        boxSizing: "border-box",
      }}
    >
      {/* ✅ 헤더 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
          background: "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: 1000,
        }}
      >
        <img
          src='/logo.png'
          alt='logo'
          style={{ width: "32px", height: "32px" }}
        />
      </div>

      {/* ✅ 헤더 아래 */}
      <div style={{ height: "80px" }} />

      {/* ✅ 박스 전체 레이아웃 */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* ✅ 시작하지 않음 박스 */}
        <div
          style={{
            width: "300px",
            background: "#fff",
            borderRadius: "8px",
            padding: "16px",
            boxShadow:
              "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            marginTop: "56px",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            시작하지 않음
          </h2>

          {/* 시작 전 */}
          <div
            style={{
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: "500" }}>UI 개발</div>
              <div
                style={{
                  backgroundColor: "#E5E7EB",
                  color: "#374151",
                  fontSize: "12px",
                  fontWeight: "bold",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                }}
              >
                03/21
              </div>
            </div>
            <div style={{ color: "#6B7280", fontSize: "14px" }}>공통</div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "9999px",
                  backgroundColor: "#ccc",
                  boxShadow: "0px 0px 0px 2px #fff",
                  marginTop: "20px",
                }}
              />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#6B7280",
                  marginTop: "20px",
                }}
              >
                A,B
              </span>
            </div>
          </div>
        </div>

        {/* ✅ 진행 중 박스 */}
        <div
          style={{
            width: "300px",
            background: "#fff",
            borderRadius: "8px",
            padding: "16px",
            boxShadow:
              "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            marginTop: "56px",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            진행 중
          </h2>

          <div
            style={{
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: "500" }}>서비스 마크업</div>
              <div
                style={{
                  backgroundColor: "#FEF3C7",
                  color: "#92400E",
                  fontSize: "12px",
                  fontWeight: "bold",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                }}
              >
                02/27
              </div>
            </div>
            <div style={{ color: "#6B7280", fontSize: "14px" }}>프론트엔드</div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "9999px",
                  backgroundColor: "#ccc",
                  boxShadow: "0px 0px 0px 2px #fff",
                  marginTop: "20px",
                }}
              />
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#6B7280",
                  marginTop: "20px",
                }}
              >
                C
              </span>
            </div>
          </div>
        </div>

        {/* ✅ 완료 박스 + 버튼 세로 정렬 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "flex-end",
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              height: "40px",
              border: "none",
              background: "#000",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "4px",
              width: "fit-content",
            }}
          >
            + 새 할 일 추가
          </button>

          <div
            style={{
              width: "300px",
              background: "#fff",
              borderRadius: "8px",
              padding: "16px",
              boxShadow:
                "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              완료
            </h2>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ fontWeight: "500" }}>데이터 준비</div>
                <div
                  style={{
                    backgroundColor: "#DCFCE7",
                    color: "#166534",
                    fontSize: "12px",
                    fontWeight: "bold",
                    borderRadius: "9999px",
                    padding: "4px 12px",
                  }}
                >
                  완료
                </div>
              </div>
              <div style={{ color: "#6B7280", fontSize: "14px" }}>공통</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "9999px",
                    backgroundColor: "#ccc",
                    boxShadow: "0px 0px 0px 2px #fff",
                    marginTop: "20px",
                  }}
                />
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6B7280",
                    marginTop: "20px",
                  }}
                >
                  임한솔
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
