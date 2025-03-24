import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TodoFormData } from "../../types/todo";

export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TodoFormData>({
    title: "",
    content: "",
    status: "notStarted",
    startDate: "",
    endDate: "",
    assignees: [],
  });
  const [assigneeInput, setAssigneeInput] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAssigneeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAssigneeInput(e.target.value);
  };

  const handleAddAssignee = () => {
    if (assigneeInput.trim()) {
      setFormData({
        ...formData,
        assignees: [...formData.assignees, assigneeInput.trim()],
      });
      setAssigneeInput("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/");
      } else {
        alert("할 일 저장에 실패했습니다.");
      }
    } catch (error) {
      console.error("할 일 저장 중 오류 발생:", error);
      alert("할 일 저장 중 오류가 발생했습니다.");
    }
  };

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
      <form
        onSubmit={handleSubmit}
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
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "36px",
            fontWeight: "600",
            lineHeight: "44px",
            color: "#111827",
            marginBottom: "24px",
          }}
        >
          할 일 추가
        </h1>

        {/* 제목 */}
        <div style={{ width: "100%" }}>
          <label style={{ fontWeight: "bold" }}>제목</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="제목을 입력하세요"
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginTop: "4px",
            }}
            required
          />
        </div>

        {/* 내용 */}
        <div style={{ width: "100%", marginTop: "24px" }}>
          <label style={{ fontWeight: "bold" }}>내용</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="내용을 입력하세요"
            style={{
              width: "100%",
              height: "98px",
              padding: "8px 12px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginTop: "4px",
            }}
            required
          />
        </div>

        {/* 진행상황 */}
        <div style={{ width: "100%", marginTop: "24px" }}>
          <label style={{ fontWeight: "bold" }}>진행상황</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              marginTop: "4px",
            }}
            required
          >
            <option value="notStarted">시작 전</option>
            <option value="inProgress">진행 중</option>
            <option value="done">완료</option>
          </select>
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
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                marginTop: "4px",
              }}
              required
            />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <label style={{ fontWeight: "bold" }}>종료 날짜</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                marginTop: "4px",
              }}
              required
            />
          </div>
        </div>

        {/* 담당자 */}
        <div style={{ width: "100%", marginTop: "24px" }}>
          <label style={{ fontWeight: "bold" }}>담당자</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={assigneeInput}
              onChange={handleAssigneeInputChange}
              placeholder="담당자를 입력하세요"
              style={{
                flex: 1,
                padding: "8px 12px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                marginTop: "4px",
              }}
            />
            <button
              type="button"
              onClick={handleAddAssignee}
              style={{
                padding: "8px 16px",
                marginTop: "4px",
                background: "#f5f5f5",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              추가
            </button>
          </div>

          {/* 추가된 담당자 목록 */}
          {formData.assignees.length > 0 && (
            <div style={{ marginTop: "8px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {formData.assignees.map((assignee, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "4px 8px",
                      background: "#e5e7eb",
                      borderRadius: "9999px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {assignee}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          assignees: formData.assignees.filter(
                            (_, i) => i !== index
                          ),
                        });
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
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
            type="button"
            onClick={() => navigate("/todos")}
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
            type="submit"
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
      </form>
    </div>
  );
}
