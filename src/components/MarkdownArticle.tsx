import Link from 'next/link'
import type { ReactNode } from 'react'

type MarkdownArticleProps = {
  content: string
}

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let rest = text
  let key = 0

  while (rest.length) {
    const boldIndex = rest.indexOf('**')
    const linkMatch = rest.match(/\[([^\]]+)\]\(([^)]+)\)/)
    const linkIndex = linkMatch?.index ?? -1

    const candidates = [boldIndex, linkIndex].filter((index) => index >= 0)
    const nextIndex = candidates.length ? Math.min(...candidates) : -1

    if (nextIndex === -1) {
      nodes.push(rest)
      break
    }

    if (nextIndex > 0) {
      nodes.push(rest.slice(0, nextIndex))
      rest = rest.slice(nextIndex)
      continue
    }

    if (rest.startsWith('**')) {
      const end = rest.indexOf('**', 2)
      if (end === -1) {
        nodes.push(rest)
        break
      }
      nodes.push(<strong key={`strong-${key++}`}>{parseInline(rest.slice(2, end))}</strong>)
      rest = rest.slice(end + 2)
      continue
    }

    const currentLink = rest.match(/^\[([^\]]+)\]\(([^)]+)\)/)
    if (currentLink) {
      const [, label, href] = currentLink
      const className = 'font-medium text-accent underline-offset-4 hover:underline'
      nodes.push(
        href.startsWith('/') ? (
          <Link key={`link-${key++}`} href={href} className={className}>
            {label}
          </Link>
        ) : (
          <a key={`link-${key++}`} href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {label}
          </a>
        ),
      )
      rest = rest.slice(currentLink[0].length)
      continue
    }
  }

  return nodes
}

function parseTable(lines: string[]) {
  return lines
    .filter((line) => !/^\|\s*-/.test(line))
    .map((line) =>
      line
        .split('|')
        .slice(1, -1)
        .map((cell) => cell.trim()),
    )
}

export default function MarkdownArticle({ content }: MarkdownArticleProps) {
  const lines = content.split('\n')
  const blocks: ReactNode[] = []
  let index = 0
  let key = 0

  while (index < lines.length) {
    const line = lines[index].trim()

    if (!line) {
      index += 1
      continue
    }

    if (line.startsWith('## ')) {
      blocks.push(
        <h2 key={`h2-${key++}`} className="mt-16 border-t border-border pt-10 font-mincho text-3xl font-medium leading-[1.55] md:text-4xl">
          {line.replace(/^##\s+/, '')}
        </h2>,
      )
      index += 1
      continue
    }

    if (line.startsWith('### ')) {
      blocks.push(
        <h3 key={`h3-${key++}`} className="mt-10 text-xl font-medium leading-[1.7]">
          {line.replace(/^###\s+/, '')}
        </h3>,
      )
      index += 1
      continue
    }

    if (line.startsWith('- ')) {
      const items: string[] = []
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().replace(/^-\s+/, ''))
        index += 1
      }
      blocks.push(
        <ul key={`ul-${key++}`} className="mt-5 list-disc space-y-2 pl-6 text-muted">
          {items.map((item) => (
            <li key={item}>{parseInline(item)}</li>
          ))}
        </ul>,
      )
      continue
    }

    if (line.startsWith('|')) {
      const tableLines: string[] = []
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        tableLines.push(lines[index].trim())
        index += 1
      }
      const rows = parseTable(tableLines)
      const [head, ...body] = rows
      blocks.push(
        <div key={`table-${key++}`} className="mt-7 overflow-x-auto">
          <table className="table-basic bg-bg">
            {head && (
              <thead>
                <tr>
                  {head.map((cell) => (
                    <th key={cell}>{parseInline(cell)}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row) => (
                <tr key={row.join('-')}>
                  {row.map((cell) => (
                    <td key={cell}>{parseInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      continue
    }

    const paragraphLines: string[] = []
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith('## ') &&
      !lines[index].trim().startsWith('### ') &&
      !lines[index].trim().startsWith('- ') &&
      !lines[index].trim().startsWith('|')
    ) {
      paragraphLines.push(lines[index].trim())
      index += 1
    }

    const paragraph = paragraphLines.join(' ')
    blocks.push(
      <p key={`p-${key++}`} className="mt-5 text-[15px] leading-[2.15] text-muted md:text-base">
        {parseInline(paragraph)}
      </p>,
    )
  }

  return <div className="article-body">{blocks}</div>
}
