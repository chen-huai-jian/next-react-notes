import React, {Suspense} from 'react'
import Link from 'next/link'

import SidebarSearchField from '@/components/SidebarSearchField';
import SidebarNoteList from '@/components/SlidebarNoteList'
import EditButton from '@/components/EditButton'
import NoteListSkeleton from '@/components/NoteListSkeleton';

export default async function Slidebar() {
  // const notes = await getAllNotes();
  return (
    <>
      <section className='col sidebar'>
        <Link href={'/'} className='link-unstyled'>
          <section className='sidebar-header'>
            <img  
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className='slidbar-menu' role='menubar'>
          <SidebarSearchField />
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          {/* 使用 Suspanse，跳转会立即生效，展示fallback骨架屏，数据加载不会阻塞也买你，用户依然可以进行交互 */}
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList/>
          </Suspense>

        </nav>
      </section>
    </>
  )
}