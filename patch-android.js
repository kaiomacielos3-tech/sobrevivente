const fs=require('fs');
const mp='android/app/src/main/AndroidManifest.xml';let m=fs.readFileSync(mp,'utf8');
if(!m.includes('screenOrientation'))m=m.replace('<activity','<activity android:screenOrientation="sensorLandscape"');
fs.writeFileSync(mp,m);
fs.writeFileSync('android/app/src/main/java/com/sobrevivente/arena/MainActivity.java',`package com.sobrevivente.arena;
import android.os.Bundle;
import android.view.WindowManager;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;
public class MainActivity extends BridgeActivity {
  @Override public void onCreate(Bundle b){super.onCreate(b);getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);hide();}
  @Override public void onWindowFocusChanged(boolean f){super.onWindowFocusChanged(f);if(f)hide();}
  private void hide(){WindowCompat.setDecorFitsSystemWindows(getWindow(),false);
    WindowInsetsControllerCompat c=WindowCompat.getInsetsController(getWindow(),getWindow().getDecorView());
    c.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
    c.hide(WindowInsetsCompat.Type.systemBars());}
}
`);console.log('Android: paisagem + tela cheia imersiva aplicados');
