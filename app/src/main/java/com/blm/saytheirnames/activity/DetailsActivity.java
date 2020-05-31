package com.blm.saytheirnames.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Shader;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.SeekBar;
import android.widget.TextView;

import com.blm.saytheirnames.R;
import com.contentarcade.adnan.shapedblurlibrary.GaussianBlur;
import com.contentarcade.adnan.shapedblurlibrary.view.ShapeLayout;


public class DetailsActivity extends AppCompatActivity {


    private ImageView actualImage;
    private TextView txtDescription;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);

        actualImage = findViewById(R.id.actual_image);
        txtDescription =  findViewById(R.id.txtDescription);

        actualImage.setImageDrawable(getResources().getDrawable(R.drawable.mrfloyd));

        Shader myShader = new LinearGradient(
                0, txtDescription.getLineHeight() * 5.10f, 0, 0,
                Color.WHITE,Color.parseColor("#101010"),
                Shader.TileMode.CLAMP);
        txtDescription.getPaint().setShader(myShader);
    }

}