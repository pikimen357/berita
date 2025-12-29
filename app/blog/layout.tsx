export default function BlogLayout({children}: {children: React.ReactNode}) {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ border: '1px solid black' , padding: '1rem', marginRight: '1rem' }}> 
                Sidebar
            </div>

            <div style={{ textAlign: 'justify' }}>{children}</div>
        </div>
    );
}