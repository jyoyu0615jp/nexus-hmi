import {
  useRef,
  useState,
} from 'react'

import {
  Bot,
  FileText,
  Send,
  Sparkles,
  TriangleAlert,
  User,
  Users,
  X,
} from 'lucide-react'

import {
  generateAIResponse,
  type AIIntent,
} from '../utils/aiAssistant'

import './ai-assistant-drawer.css'

interface AIAssistantDrawerProps {
  isOpen: boolean
  onClose: () => void
}

interface ChatMessage {
  id: number
  role: 'user' | 'assistant'
  content: string
}

function AIAssistantDrawer({
  isOpen,
  onClose,
}: AIAssistantDrawerProps) {
  const [
    question,
    setQuestion,
  ] = useState('')

  const [
    messages,
    setMessages,
  ] = useState<ChatMessage[]>([])

  const nextMessageId =
    useRef(1)

  if (!isOpen) {
    return null
  }

  function addConversation(
    userMessage: string,
    aiMessage: string,
  ) {
    const userId =
      nextMessageId.current++

    const assistantId =
      nextMessageId.current++

    setMessages((current) => [
      ...current,
      {
        id: userId,
        role: 'user',
        content: userMessage,
      },
      {
        id: assistantId,
        role: 'assistant',
        content: aiMessage,
      },
    ])
  }

  function handleQuestion() {
    const trimmedQuestion =
      question.trim()

    if (!trimmedQuestion) {
      return
    }

    const aiResponse =
      generateAIResponse(
        trimmedQuestion,
      )

    addConversation(
      trimmedQuestion,
      aiResponse,
    )

    setQuestion('')
  }

  function handleAction(
    action: AIIntent,
  ) {
    const actionPrompts: Record<
      AIIntent,
      string
    > = {
      summary:
        'プロジェクトの概要を教えてください。',
      risks:
        '納期リスクを分析してください。',
      members:
        'アサイン可能なメンバーを提案してください。',
      report:
        '週次プロジェクトレポートを作成してください。',
    }

    const prompt =
      actionPrompts[action]

    const aiResponse =
      generateAIResponse(prompt)

    addConversation(
      prompt,
      aiResponse,
    )
  }

  return (
    <aside
      className="ai-assistant-popup"
      aria-label="AIアシスタント"
    >
      <div className="ai-assistant-popup__header">
        <div className="ai-assistant-popup__heading">
          <Bot
            size={20}
            aria-hidden="true"
          />

          <div>
            <h2>
              AIアシスタント
            </h2>

            <p>
              NEXUS//HMI Copilot
            </p>
          </div>
        </div>

        <button
          className="ai-assistant-popup__close"
          type="button"
          aria-label="AIアシスタントを閉じる"
          onClick={onClose}
        >
          <X
            size={18}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="ai-assistant-popup__content">
        {messages.length === 0 ? (
          <>
            <div className="ai-assistant-popup__welcome">
              <h3>
                何をお手伝いしましょうか？
              </h3>

              <p>
                プロジェクトの進捗、
                納期リスク、
                チームの稼働状況について
                質問できます。
              </p>

              <p className="ai-assistant-popup__languages">
                日本語 · English · 中文
              </p>
            </div>

            <div className="ai-assistant-actions">
              <button
                className="ai-assistant-action"
                type="button"
                onClick={() =>
                  handleAction('summary')
                }
              >
                <Sparkles
                  size={17}
                  aria-hidden="true"
                />

                <strong>
                  プロジェクト概要
                </strong>
              </button>

              <button
                className="ai-assistant-action"
                type="button"
                onClick={() =>
                  handleAction('risks')
                }
              >
                <TriangleAlert
                  size={17}
                  aria-hidden="true"
                />

                <strong>
                  納期リスクを分析
                </strong>
              </button>

              <button
                className="ai-assistant-action"
                type="button"
                onClick={() =>
                  handleAction('members')
                }
              >
                <Users
                  size={17}
                  aria-hidden="true"
                />

                <strong>
                  メンバーを提案
                </strong>
              </button>

              <button
                className="ai-assistant-action"
                type="button"
                onClick={() =>
                  handleAction('report')
                }
              >
                <FileText
                  size={17}
                  aria-hidden="true"
                />

                <strong>
                  週次レポートを作成
                </strong>
              </button>
            </div>
          </>
        ) : (
          <div className="ai-conversation">
            {messages.map(
              (message) => (
                <div
                  key={message.id}
                  className={`ai-message ai-message--${message.role}`}
                >
                  <div className="ai-message__avatar">
                    {message.role ===
                    'assistant' ? (
                      <Bot
                        size={15}
                        aria-hidden="true"
                      />
                    ) : (
                      <User
                        size={15}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="ai-message__bubble">
                    <p>
                      {message.content}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        )}
      </div>

      <div className="ai-assistant-composer">
        <div className="ai-assistant-composer__control">
          <input
            type="text"
            value={question}
            placeholder="AIに質問してください..."
            aria-label="AIに質問"
            onChange={(event) =>
              setQuestion(
                event.target.value,
              )
            }
            onKeyDown={(event) => {
              if (
                event.key === 'Enter'
              ) {
                handleQuestion()
              }
            }}
          />

          <button
            type="button"
            aria-label="メッセージを送信"
            onClick={handleQuestion}
          >
            <Send
              size={16}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default AIAssistantDrawer