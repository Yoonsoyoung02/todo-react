import React from "react";

export default function App() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f8f9fa",
        boxSizing: "border-box",
      }}
    >
      {/* ✅ 헤더 */}
      {/* // 시멘트 태그 의미론적 태그로 변경 */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
          background: "#fff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          position: "fixed",
          top: "0px",
          zIndex: 1000,
        }}
      >
        <img
          src="/logo.png"
          alt="logo"
          style={{ width: "32px", height: "32px" }}
        />
      </header>

      {/* ✅ 헤더 아래 */}
      {/* 버튼 영역을 문서 흐름에 맞게 상위로 이동 */}
      {/* width는 90% 로 하고 margin 을 이용한 가운데 정렬 */}
      <section style={{ width: "90%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              marginTop: "80px",
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
        </div>

        {/* ✅ 박스 전체 레이아웃 */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            // 본문 상위에서 width 90% 가운데 정렬 했으므로 삭제
          }}
        >
          {/* ✅ 시작하지 않음 박스 */}
          <div
            style={{
              // 현재 같은 위치의  flex item 들이 동일한 비율로 공간을 차지하게 변경
              flex: 1,
              background: "#fff",
              borderRadius: "8px",
              padding: "16px",
              boxShadow:
                "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
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
                // gap 에 영향을 받는 요소가 하나뿐이라 굳이 flex를 주지 않고 하위 div에 marginTop 설정
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
              <div
                style={{ color: "#6B7280", fontSize: "14px", marginTop: "8px" }}
              >
                공통
              </div>
              {/* avatar 겹치는 css  */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "9999px",
                      backgroundColor: "#ccc",
                      boxShadow: "0px 0px 0px 2px #fff",
                      zIndex: 10 - i,
                      marginLeft: i > 0 ? "-12px" : "0",
                    }}
                  />
                ))}

                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6B7280",
                    marginLeft: "8px",
                  }}
                >
                  A,B,C
                </span>
              </div>
            </div>
          </div>

          {/* ✅ 진행 중 박스 */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: "8px",
              padding: "16px",
              boxShadow:
                "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
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
              <div
                style={{ color: "#6B7280", fontSize: "14px", marginTop: "8px" }}
              >
                프론트엔드
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {[0].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "9999px",
                      backgroundColor: "#ccc",
                      boxShadow: "0px 0px 0px 2px #fff",
                      zIndex: 10 - i,
                      marginLeft: i > 0 ? "-12px" : "0",
                    }}
                  />
                ))}

                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6B7280",
                    marginLeft: "8px",
                  }}
                >
                  A
                </span>
              </div>
            </div>
          </div>

          {/* ✅ 완료 박스 + 버튼 세로 정렬 */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: "8px",
              padding: "16px",
              boxShadow:
                "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
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
              완료
            </h2>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                padding: "12px",
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {[0].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "9999px",
                      backgroundColor: "#ccc",
                      boxShadow: "0px 0px 0px 2px #fff",
                      zIndex: 10 - i,
                      marginLeft: i > 0 ? "-12px" : "0",
                    }}
                  />
                ))}

                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#6B7280",
                    marginLeft: "8px",
                  }}
                >
                  A
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
