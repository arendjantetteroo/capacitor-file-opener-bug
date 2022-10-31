import {
  FileOpener,
  FileOpenerOptions
} from '@capacitor-community/file-opener';

export default function Home() {

  return ( <button onClick={async () => {
    openWithFileOpener('test.txt', 'text/plain');
  }}><b>Click to Generate file!</b></button> );

}

export function openWithFileOpener(
    result: string,
    contentType: string | undefined
) {
  // Then open the file with the FileOpener plugin
  FileOpener.open({
    filePath: result,
    contentType: contentType
  } as FileOpenerOptions).catch((e) => captureException(e));
}