import { KernelMessage } from '@jupyterlab/services'
import { BaseKernel, IKernel } from '@jupyterlite/kernel'
import sci from 'sci-npm'

export class ClojureKernel extends BaseKernel implements IKernel {
  constructor(options: any) {
    super(options)
  }

  async kernelInfoRequest(): Promise<KernelMessage.IInfoReplyMsg['content']> {
    return {
      implementation: 'Clojure',
      implementation_version: '0.1.0',
      language_info: {
        codemirror_mode: {
          name: 'clojure',
        },
        file_extension: '.clj',
        mimetype: 'text/x-clojure',
        name: 'clojure',
        version: '1.11',
        pygments_lexer: 'clojure',
      },
      protocol_version: '5.3',
      status: 'ok',
      banner: 'Clojure kernel using sci',
      help_links: [
        {
          text: 'clojure Kernel',
          url: 'https://github.com/bencode/jupyterlite-clojure-kernel',
        },
      ],
    }
  }

  async executeRequest(
    content: KernelMessage.IExecuteRequestMsg['content'],
  ): Promise<KernelMessage.IExecuteReplyMsg['content']> {
    const { code } = content
    const result = sci.eval_string(code)

    this.publishExecuteResult({
      execution_count: this.executionCount,
      data: {
        'text/plain': String(result),
      },
      metadata: {},
    })

    return {
      status: 'ok',
      execution_count: this.executionCount,
      user_expressions: {},
    }
  }

  async completeRequest(
    content: KernelMessage.ICompleteRequestMsg['content'],
  ): Promise<KernelMessage.ICompleteReplyMsg['content']> {
    return {
      matches: [],
      cursor_start: content.cursor_pos,
      cursor_end: content.cursor_pos,
      metadata: {},
      status: 'ok',
    }
  }

  async inspectRequest(
    content: KernelMessage.IInspectRequestMsg['content'],
  ): Promise<KernelMessage.IInspectReplyMsg['content']> {
    return {
      status: 'ok',
      found: false,
      data: {},
      metadata: {},
    }
  }

  async isCompleteRequest(
    content: KernelMessage.IIsCompleteRequestMsg['content'],
  ): Promise<KernelMessage.IIsCompleteReplyMsg['content']> {
    return {
      status: 'complete',
    }
  }

  async commInfoRequest(
    content: KernelMessage.ICommInfoRequestMsg['content'],
  ): Promise<KernelMessage.ICommInfoReplyMsg['content']> {
    return {
      comms: {},
      status: 'ok',
    }
  }

  inputReply(content: KernelMessage.IInputReplyMsg['content']): void {
    // Not implemented
  }

  async commOpen(msg: KernelMessage.ICommOpenMsg): Promise<void> {
    // Not implemented
  }

  async commMsg(msg: KernelMessage.ICommMsgMsg): Promise<void> {
    // Not implemented
  }

  async commClose(msg: KernelMessage.ICommCloseMsg): Promise<void> {
    // Not implemented
  }
}
