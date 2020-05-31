package com.blm.saytheirnames.activity;

import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Shader;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.blm.saytheirnames.R;


public class DetailsActivity extends AppCompatActivity implements View.OnClickListener {


    private ImageView actualImage;
    private TextView txtDescription;

    private ImageButton btnReadmore;

    private LinearLayout linearLayoutDetails;
    private LinearLayout linearLayoutReadmore;

    boolean readMoreState = false;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);

        actualImage = findViewById(R.id.actual_image);
        txtDescription = findViewById(R.id.txtDescription);
        btnReadmore = findViewById(R.id.btnReadmore);
        linearLayoutDetails = findViewById(R.id.linearLayoutDetails);
        linearLayoutReadmore = findViewById(R.id.linearLayoutReadmore);

        actualImage.setImageDrawable(getResources().getDrawable(R.drawable.mrfloyd));

        btnReadmore.setOnClickListener(this);

        Shader myShader = new LinearGradient(
                0, txtDescription.getLineHeight() * 5.10f, 0, 0,
                Color.WHITE, Color.parseColor("#101010"),
                Shader.TileMode.CLAMP);
        txtDescription.getPaint().setShader(myShader);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.btnReadmore:
                switchView(true);
                break;
        }
    }

    public void switchView(boolean state){
        readMoreState = state;
        if (!state) {
            linearLayoutDetails.setVisibility(View.VISIBLE);
            linearLayoutReadmore.setVisibility(View.GONE);
        } else {
            linearLayoutDetails.setVisibility(View.GONE);
            linearLayoutReadmore.setVisibility(View.VISIBLE);
        }
    }

    @Override
    public void onBackPressed() {
        if(readMoreState){
            switchView(false);
        }else{
            super.onBackPressed();
        }

    }
}