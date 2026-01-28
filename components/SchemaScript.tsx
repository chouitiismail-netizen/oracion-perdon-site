// Component to inject JSON-LD structured data into pages
// Usage: <SchemaScript schemas={[schema1, schema2]} />

interface SchemaScriptProps {
  schemas: object[];
}

export default function SchemaScript({ schemas }: SchemaScriptProps) {
  if (!schemas || schemas.length === 0) return null;

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
